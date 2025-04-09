import React, { useState } from 'react';
import { backgrounds, textColors, shadows } from '~/styling';
import { cn } from '~/lib/utils';
import { Container, H1, H2, H3, H4, Body1, Body2, Button, Label1 } from '~/components/basic';
import ChatBox from '~/components/ChatBox/ChatBox';

// Story type definition
type StoryType = 'funny' | 'creepy' | 'horrible' | 'sweet';

export default function PlayPage() {
  const [selectedStoryType, setSelectedStoryType] = useState<StoryType | null>(null);

  const handleStoryTypeSelect = (type: StoryType) => {
    setSelectedStoryType(type);
    // Here you could send a message to the chat to start a new story of this type
  };

  return (
    <Container className="py-8">
      <header className="mb-8 text-center">
        <H2 className="mb-4">Turtle Soup</H2>
        <Body1 color="secondary" className="max-w-2xl mx-auto">
          A storytelling guessing game where you try to figure out what happened in the middle of a story.
          Ask yes/no questions to uncover the mystery!
        </Body1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* TODO: Add records */}
        {/* <div className={cn(
          "lg:col-span-1 p-6 rounded-lg",
          backgrounds.surfaceAlt,
          shadows.elevation1
        )}>
          <H4 className="mb-2">Records</H4>
          <div className="grid grid-cols-2 gap-2">
            
          </div>
        </div> */}
        
        <div className="lg:col-span-2">
          <ChatBox id="turtle-soup-game" className="h-[80vh] max-h-[600px]" />
        </div>
      </div>
    </Container>
  );
}