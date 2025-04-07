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
        <H1 className="mb-4">Turtle Soup</H1>
        <Body1 color="secondary" className="max-w-2xl mx-auto">
          A storytelling guessing game where you try to figure out what happened in the middle of a story.
          Ask yes/no questions to uncover the mystery!
        </Body1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={cn(
          "lg:col-span-1 p-6 rounded-lg",
          backgrounds.surfaceAlt,
          shadows.elevation1
        )}>
          <H3 className="mb-5">How to Play</H3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-3 h-3 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0">・</Body2>
              <div>
                <Body2 className="font-medium">The AI host creates a story with a surprising twist</Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-3 h-3 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0">・</Body2>
              <div>
                <Body2 className="font-medium">You'll only see the beginning and ending of the story</Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-3 h-3 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0">・</Body2>
              <div>
                <Body2 className="font-medium">Ask yes/no questions to figure out what happened in the middle</Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-3 h-3 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0">・</Body2>
              <div>
                <Body2 className="font-medium">The AI can only answer "Yes", "No", or "Not related"</Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-3 h-3 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0">・</Body2>
              <div>
                <Body2 className="font-medium">Try to reconstruct the full story</Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-3 h-3 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0">・</Body2>
              <div>
                <Body2 className="font-medium">The AI will track your progress with a percentage rating</Body2>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <H4 className="mb-2">Story Types</H4>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="primary"
                className={cn(
                  "w-full transition-all",
                  selectedStoryType === 'funny' && "scale-105",
                  backgrounds.fun,
                  textColors.fun
                )}
                showFocusRing={false}
                onClick={() => handleStoryTypeSelect('funny')}
              >
                Funny
              </Button>
              <Button 
                variant="primary"
                className={cn(
                  "w-full transition-all",
                  selectedStoryType === 'creepy' && "scale-105",
                  backgrounds.creepy,
                  textColors.creepy
                )}
                showFocusRing={false}
                onClick={() => handleStoryTypeSelect('creepy')}
              >
                Creepy
              </Button>
              <Button 
                variant="primary"
                className={cn(
                  "w-full transition-all",
                  selectedStoryType === 'horrible' && "scale-105",
                  backgrounds.danger,
                  textColors.danger
                )}
                showFocusRing={false}
                onClick={() => handleStoryTypeSelect('horrible')}
              >
                Horrible
              </Button>
              <Button 
                variant="primary"
                className={cn(
                  "w-full transition-all",
                  selectedStoryType === 'sweet' && "scale-105",
                  backgrounds.sweet,
                  textColors.sweet
                )}
                showFocusRing={false}
                onClick={() => handleStoryTypeSelect('sweet')}
              >
                Sweet
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <ChatBox id="turtle-soup-game" className="h-[600px]" />
        </div>
      </div>
    </Container>
  );
}