import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Define the structure of a chat message
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Define the context type
interface ChatContextType {
  messages: ChatMessage[];
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

// Create the context with a default value
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Props for the ChatProvider component
interface ChatProviderProps {
  children: React.ReactNode;
  id: string; // Unique identifier for the chat session
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children, id }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load messages from localStorage on initial render
  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_${id}`);
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        // Convert string timestamps back to Date objects
        const messagesWithDateObjects = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDateObjects);
      } catch (error) {
        console.error('Failed to parse saved messages:', error);
      }
    }
  }, [id]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_${id}`, JSON.stringify(messages));
    }
  }, [messages, id]);

  // Function to send a new message
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Create a new user message
    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      content,
      sender: 'user',
      timestamp: new Date()
    };

    // Add the user message to the chat
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Set loading state while waiting for AI response
    setIsLoading(true);

    try {
      // Here you would typically make an API call to get the AI response
      // This is a placeholder - replace with your actual API call
      const response = await new Promise<string>(resolve => {
        setTimeout(() => {
          resolve(`This is a mock AI response to: "${content}"`);
        }, 1000);
      });

      // Create the AI response message
      const aiMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        content: response,
        sender: 'ai',
        timestamp: new Date()
      };

      // Add the AI response to the chat
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      // Optionally add an error message to the chat
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to clear all messages
  const clearMessages = useCallback(() => {
    setMessages([]);
    localStorage.removeItem(`chat_${id}`);
  }, [id]);

  // Create the context value
  const contextValue: ChatContextType = {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook to use the chat context
export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}; 