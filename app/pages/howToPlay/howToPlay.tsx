import React from 'react';
import { backgrounds, shadows, textColors } from '~/styling';
import { cn } from '~/lib/utils';
import { Container, H1, H2, H3, H4, Body1, Body2, Button, Label1 } from '~/components/basic';
import bookLogo from '~/assets/images/logo-app-book.png';
import turtleLogo from '~/assets/images/logo-app-turtle.png';
import LoadingScreen from '~/components/LoadingScreen';

export default function HowToPlayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
    <Container className="py-8 sm:py-12 md:py-16 max-w-6xl mx-auto">
      <header className="mb-8 sm:mb-12 md:mb-16 text-center">
        <div className="inline-block mb-4 sm:mb-6">
          <img 
            src={bookLogo} 
            alt="Book" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
          />
        </div>
        <H1 
          className="mb-3 sm:mb-4 text-primary"
          sm="heading2"
          md="heading1"
        >
          How to Play Turtle Soup
        </H1>
        <Body1 
          color="secondary" 
          className="max-w-2xl mx-auto"
          sm="body2"
          md="body1"
        >
          A storytelling guessing game where you try to figure out what happened in the middle of a story.
          Ask yes/no questions to uncover the mystery!
        </Body1>
      </header>

      {/* Main content grid - modified to max 2 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        {/* Rules overview card */}
        <div className={cn(
          "p-4 sm:p-6 rounded-lg h-full border border-cyan-200 dark:border-cyan-800",
          "bg-gradient-to-br from-white to-cyan-50 dark:from-slate-800 dark:to-cyan-950",
          shadows.elevation2
        )}>
          <H3 
            className="mb-3 sm:mb-5 text-primary flex items-center"
            sm="heading4"
            md="heading3"
          >
            <span className="mr-2 text-xl sm:text-2xl">📜</span> Game Rules
          </H3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-white font-bold text-xs sm:text-sm">1</Body2>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  The AI host creates a story with a surprising twist
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-white font-bold text-xs sm:text-sm">2</Body2>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  You'll only see the beginning and ending of the story
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-white font-bold text-xs sm:text-sm">3</Body2>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  Ask yes/no questions to figure out what happened in the middle
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-white font-bold text-xs sm:text-sm">4</Body2>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  The AI can only answer "Yes", "No", or "Not related"
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-white font-bold text-xs sm:text-sm">5</Body2>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  Try to reconstruct the full story
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <Body2 className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-white font-bold text-xs sm:text-sm">6</Body2>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  The AI will track your progress with a percentage rating
                </Body2>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and strategy card */}
        <div className={cn(
          "p-4 sm:p-6 rounded-lg h-full border border-amber-200 dark:border-amber-900",
          "bg-gradient-to-br from-white to-amber-50 dark:from-slate-800 dark:to-amber-950",
          shadows.elevation2
        )}>
          <H3 
            className="mb-3 sm:mb-5 text-amber-600 dark:text-amber-400 flex items-center"
            sm="heading4"
            md="heading3"
          >
            <span className="mr-2 text-xl sm:text-2xl">💡</span> Tips & Strategy
          </H3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-900/40 p-2 sm:p-3 rounded-lg mr-2 sm:mr-3 flex-shrink-0">
                <span className="text-amber-500 dark:text-amber-400 text-lg sm:text-xl">🔍</span>
              </div>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  Start with broad questions
                </Body2>
                <Body2 
                  color="secondary"
                  sm="body3"
                  md="body2"
                >
                  Begin with general questions to narrow down possibilities
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-900/40 p-2 sm:p-3 rounded-lg mr-2 sm:mr-3 flex-shrink-0">
                <span className="text-amber-500 dark:text-amber-400 text-lg sm:text-xl">🧩</span>
              </div>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  Build on established facts
                </Body2>
                <Body2 
                  color="secondary"
                  sm="body3"
                  md="body2"
                >
                  Use confirmed information to develop your theory
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-900/40 p-2 sm:p-3 rounded-lg mr-2 sm:mr-3 flex-shrink-0">
                <span className="text-amber-500 dark:text-amber-400 text-lg sm:text-xl">📝</span>
              </div>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  Track your questions
                </Body2>
                <Body2 
                  color="secondary"
                  sm="body3"
                  md="body2"
                >
                  Keep notes on what you've learned so far
                </Body2>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-900/40 p-2 sm:p-3 rounded-lg mr-2 sm:mr-3 flex-shrink-0">
                <span className="text-amber-500 dark:text-amber-400 text-lg sm:text-xl">🔄</span>
              </div>
              <div>
                <Body2 
                  className="font-medium"
                  sm="body2"
                  md="body1"
                >
                  Think outside the box
                </Body2>
                <Body2 
                  color="secondary"
                  sm="body3"
                  md="body2"
                >
                  Stories often have unexpected twists!
                </Body2>
              </div>
            </div>
          </div>
        </div>

        {/* Example card */}
        <div className={cn(
          "p-4 sm:p-6 rounded-lg h-full border border-purple-200 dark:border-purple-900",
          "bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-950",
          shadows.elevation2
        )}>
          <H3 
            className="mb-3 sm:mb-5 text-purple-600 dark:text-purple-400 flex items-center"
            sm="heading4"
            md="heading3"
          >
            <span className="mr-2 text-xl sm:text-2xl">🎮</span> Example Story
          </H3>
          <div className="mb-4">
            <H4 
              className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-purple-500 dark:text-purple-400"
              sm="label2"
              md="label1"
            >
              Beginning
            </H4>
            <div className={cn("p-3 sm:p-4 rounded-lg mb-3 sm:mb-4", "bg-white dark:bg-slate-800", shadows.elevation1)}>
              <Body2 
                sm="body3"
                md="body2"
              >
                Sarah left her apartment to go to work on Monday morning.
              </Body2>
            </div>

            <H4 
              className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-purple-500 dark:text-purple-400"
              sm="label2"
              md="label1"
            >
              Ending
            </H4>
            <div className={cn("p-3 sm:p-4 rounded-lg mb-3 sm:mb-4", "bg-white dark:bg-slate-800", shadows.elevation1)}>
              <Body2 
                sm="body3"
                md="body2"
              >
                Sarah arrived at work on Wednesday with a cast on her arm.
              </Body2>
            </div>

            <H4 
              className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-purple-500 dark:text-purple-400"
              sm="label2"
              md="label1"
            >
              Sample Questions
            </H4>
            <div className={cn("p-3 sm:p-4 rounded-lg", "bg-white dark:bg-slate-800", shadows.elevation1)}>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-600 dark:text-purple-400 mr-2 font-medium">Q:</span>
                  <Body2 
                    sm="body3"
                    md="body2"
                  >
                    Did Sarah have an accident?
                  </Body2>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2 font-bold">A:</span>
                  <Body2 
                    sm="body3"
                    md="body2"
                  >
                    Yes
                  </Body2>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 dark:text-purple-400 mr-2 font-medium">Q:</span>
                  <Body2 
                    sm="body3"
                    md="body2"
                  >
                    Was Sarah in a car accident?
                  </Body2>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2 font-bold">A:</span>
                  <Body2 
                    sm="body3"
                    md="body2"
                  >
                    No
                  </Body2>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Turtle greeting card */}
        <div className={cn(
          "p-4 sm:p-6 rounded-lg h-full flex flex-col items-center justify-between text-center border border-green-200 dark:border-green-900",
          "bg-gradient-to-br from-white to-green-50 dark:from-slate-800 dark:to-green-950",
          shadows.elevation2
        )}>
          <div>
            <H3 
              className="mb-3 sm:mb-4 text-green-600 dark:text-green-400"
              sm="heading4"
              md="heading3"
            >
              Meet Terry, Your Host!
            </H3>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-cyan-200 dark:from-green-900 dark:to-cyan-900 rounded-full opacity-20"></div>
              <img 
                src={turtleLogo} 
                alt="Terry the Turtle" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <Body1 
              className="px-2 sm:px-4 mb-3 sm:mb-4 font-bold"
              sm="body2"
              md="body1"
            >
              Hi there! I'm Terry, your friendly turtle guide. 
              I've got tons of mysteries waiting for you to solve!
            </Body1>
            <Body2 
              color="secondary" 
              className="px-2 sm:px-4 mb-3"
              sm="body3"
              md="body2"
            >
              Remember, the fun is in the journey of discovery. 
              Don't worry if you don't solve it all at once!
            </Body2>
          </div>
          <div className='mb-4 sm:mb-6'>
            <Button 
              variant="success" 
              size="sm" 
              className="px-4 sm:px-6 transition-transform hover:scale-105"
            >
              Let's Play!
            </Button>
          </div>
        </div>
      </div>

      {/* Gameplay section */}
      <div className={cn(
        "p-4 sm:p-6 md:p-8 rounded-lg mb-8 sm:mb-12 md:mb-16 border border-blue-200 dark:border-blue-900",
        "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
        shadows.elevation2
      )}>
        <H2 
          className="mb-4 sm:mb-6 md:mb-8 text-center text-blue-700 dark:text-blue-300"
          sm="heading3"
          md="heading2"
        >
          Game Flow
        </H2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-md">
                <span className="text-3xl sm:text-4xl">📖</span>
              </div>
            </div>
            <H4 
              className="mb-2 text-blue-700 dark:text-blue-300"
              sm="heading5"
              md="heading4"
            >
              1. Read the Scenario
            </H4>
            <Body2 
              color="secondary"
              sm="body3"
              md="body2"
            >
              You'll see the beginning and end of a mysterious story
            </Body2>
          </div>
          
          <div className="text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-md">
                <span className="text-3xl sm:text-4xl">❓</span>
              </div>
            </div>
            <H4 
              className="mb-2 text-blue-700 dark:text-blue-300"
              sm="heading5"
              md="heading4"
            >
              2. Ask Questions
            </H4>
            <Body2 
              color="secondary"
              sm="body3"
              md="body2"
            >
              Formulate yes/no questions to uncover what happened
            </Body2>
          </div>
          
          <div className="text-center">
            <div className="mb-3 sm:mb-4 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-md">
                <span className="text-3xl sm:text-4xl">🎯</span>
              </div>
            </div>
            <H4 
              className="mb-2 text-blue-700 dark:text-blue-300"
              sm="heading5"
              md="heading4"
            >
              3. Solve the Mystery
            </H4>
            <Body2 
              color="secondary"
              sm="body3"
              md="body2"
            >
              When you think you've figured it out, propose your theory
            </Body2>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}