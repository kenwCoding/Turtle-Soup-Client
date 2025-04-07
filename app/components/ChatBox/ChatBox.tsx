import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { cn } from '~/lib/utils';
import { useChat, ChatProvider } from '~/context/ChatContext';
import { backgrounds, textColors, typography, shadows, borders } from '~/styling';

// Message bubble component
const MessageBubble: React.FC<{
  content: string;
  isUser: boolean;
  timestamp: Date;
}> = ({ content, isUser, timestamp }) => {
  // Format the timestamp
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp);

  return (
    <div className={cn(
      'max-w-[80%] mb-4 rounded-lg p-3',
      isUser ? 'ml-auto rounded-br-none' : 'mr-auto rounded-bl-none',
      isUser ? backgrounds.primary : backgrounds.surfaceAlt,
      isUser ? textColors.onPrimary : textColors.primary
    )}>
      <div className={typography.body1}>
        {content}
      </div>
      <div className={cn(
        'text-xs mt-1 text-right',
        isUser ? textColors.onPrimaryLight : textColors.onSurfaceMuted
      )}>
        {formattedTime}
      </div>
    </div>
  );
};

// Loading indicator component
const LoadingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2 p-3 max-w-[60%] rounded-lg bg-gray-100 dark:bg-gray-800">
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
  </div>
);

// Chat messages container component
const ChatMessages: React.FC = () => {
  const { messages, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map(message => (
        <MessageBubble
          key={message.id}
          content={message.content}
          isUser={message.sender === 'user'}
          timestamp={message.timestamp}
        />
      ))}
      
      {isLoading && <LoadingIndicator />}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

// Input bar component
const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        'border-t p-4 flex items-center gap-2',
        backgrounds.surface,
        borders.surface
      )}
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        disabled={isLoading}
        className={cn(
          'flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2',
          backgrounds.surfaceAlt,
          borders.surface,
          'focus:ring-blue-500 dark:focus:ring-blue-400',
          typography.body1,
          textColors.onSurfaceMuted
        )}
      />
      <button
        type="submit"
        disabled={!input.trim() || isLoading}
        className={cn(
          'p-3 rounded-full',
          backgrounds.primary,
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-colors duration-200',
          shadows.elevation1
        )}
      >
        <Send className="w-5 h-5 text-white" />
      </button>
    </form>
  );
};

// Internal ChatBox component that uses the ChatContext
const ChatBoxInternal: React.FC = () => {
  return (
    <div className={cn(
      'flex flex-col h-full border rounded-lg overflow-hidden',
      backgrounds.surface,
      borders.surface,
      shadows.elevation2
    )}>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

// Main ChatBox component that wraps the internal component with ChatProvider
interface ChatBoxProps {
  id: string;
  className?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ id, className }) => {
  return (
    <ChatProvider id={id}>
      <div className={cn('h-[500px]', className)}>
        <ChatBoxInternal />
      </div>
    </ChatProvider>
  );
};

export default ChatBox; 