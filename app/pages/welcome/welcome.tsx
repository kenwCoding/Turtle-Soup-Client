import React from 'react';
import { Link } from 'react-router';
import { 
  typography, 
  backgrounds, 
  textColors, 
  borders, 
  shadows, 
  spacing 
} from '~/styling';
import Container from '~/components/basic/Container';
import { H1, H2, Body1, Body2 } from '~/components/basic/Typography';
import Button from '~/components/basic/Button';

export default function WelcomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`py-20 ${backgrounds.primary}`}>
        <Container variant="wide">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className={`${typography.heading1} ${textColors.onPrimary} mb-6`}>
                Welcome to Turtle Soup
              </h1>
              <p className={`${typography.body1} ${textColors.onPrimary} mb-8 max-w-lg`}>
                A storytelling guessing game with surprising twists. Uncover the missing parts of mysterious, funny, creepy, or sweet stories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/play" 
                  className={`inline-block px-6 py-3 rounded-lg ${backgrounds.surface} ${textColors.primary} ${shadows.elevation1} hover:${shadows.elevation2} transition-shadow duration-300`}
                >
                  Start Playing
                </Link>
                <Link 
                  to="/how-to-play" 
                  className={`inline-block px-6 py-3 rounded-lg bg-transparent border-2 border-white ${textColors.onPrimary} hover:bg-white/10 transition-colors duration-300`}
                >
                  How to Play
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* You can replace this with a Turtle Soup logo or illustration */}
              <div className="w-full h-full max-w-md bg-white/10 rounded-xl p-8 flex items-center justify-center">
                <h2 className={`${typography.heading2} ${textColors.onPrimary}`}>Turtle Soup</h2>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${backgrounds.surface}`}>
        <Container>
          <H2 className={`${textColors.primary} text-center mb-16`}>
            How the Game Works
          </H2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-shadow duration-300`}>
              <div className={`w-12 h-12 rounded-full ${backgrounds.accent} flex items-center justify-center mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <H2 className="mb-2">You're the Guesser</H2>
              <Body1 className={textColors.onSurfaceMuted}>
                As the guesser, you'll ask Yes/No questions to uncover the hidden parts of the story.
                Use your detective skills to piece together what happened!
              </Body1>
            </div>
            
            {/* Feature 2 */}
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-shadow duration-300`}>
              <div className={`w-12 h-12 rounded-full ${backgrounds.success} flex items-center justify-center mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <H2 className="mb-2">AI is the Host</H2>
              <Body1 className={textColors.onSurfaceMuted}>
                Our AI creates unique stories with surprising twists and answers your questions
                as you try to unravel the mystery.
              </Body1>
            </div>
            
            {/* Feature 3 */}
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-shadow duration-300`}>
              <div className={`w-12 h-12 rounded-full ${backgrounds.warning} flex items-center justify-center mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <H2 className="mb-2">Track Your Progress</H2>
              <Body1 className={textColors.onSurfaceMuted}>
                The AI will provide a percentage rating to show how much of the story
                you've correctly guessed so far.
              </Body1>
            </div>
            
            {/* Feature 4 */}
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-shadow duration-300`}>
              <div className={`w-12 h-12 rounded-full ${backgrounds.danger} flex items-center justify-center mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <H2 className="mb-2">Emotional Discovery</H2>
              <Body1 className={textColors.onSurfaceMuted}>
                Experience the thrill of discovery as you finally understand the full story
                and the surprising twist that connects the beginning and end.
              </Body1>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${backgrounds.accent}`}>
        <Container>
          <div className="text-center">
            <H2 className={`${textColors.onPrimary} mb-6`}>
              Ready to Play Turtle Soup?
            </H2>
            <Body1 className={`${textColors.onPrimary} mb-8 max-w-2xl mx-auto`}>
              Start your journey of discovery with our AI host. You'll be given the beginning and end of a story - can you figure out what happened in between?
            </Body1>
            <Link 
              to="/play" 
              className={`inline-block px-8 py-4 rounded-lg ${backgrounds.surface} ${textColors.accent} ${shadows.elevation1} hover:${shadows.elevation2} transition-shadow duration-300 font-medium`}
            >
              Start Playing Now
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}