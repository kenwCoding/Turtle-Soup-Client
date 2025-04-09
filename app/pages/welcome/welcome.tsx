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
import { H1, H2, H3, H4, Body1, Body2, Label1, H5 } from '~/components/basic/Typography';
import Button from '~/components/basic/Button';
import turtleLogo from '~/assets/images/logo-app-turtle.png';
import bookLogo from '~/assets/images/logo-app-book.png';

export default function WelcomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - New purple hero with bubbles */}
      <section className={`flex justify-center items-center min-h-[calc(100vh-64px)] sm:min-h-[534px] py-12 sm:py-24 ${backgrounds.accent} relative overflow-hidden`}>
        
        {/* Floating bubbles background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
        </div>

        <Container>
          <div className="text-center relative z-10">
            <div className="inline-block mb-8">
              <img 
                src={turtleLogo}
                alt="Terry the Turtle" 
                className="w-24 h-24 sm:w-40 sm:h-40 object-contain mx-auto animate-float mb-6"
              />
            </div>
            <H1 
              className={`${textColors.onPrimary} mb-6 animate-fadeInUp`}
              sm="heading1"
              md="heading1" 
              lg="heading1"
            >
              Welcome to Turtle Soup
            </H1>
            <Body1 
              className={`${textColors.onPrimary} mb-10 max-w-2xl mx-auto`} 
              sm="body1"
              md="heading5"
            >
              A storytelling guessing game with surprising twists. Uncover the missing parts of mysterious, funny, creepy, or sweet stories.
            </Body1>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                to="/play" 
                className={`inline-block px-6 sm:px-10 py-4 sm:py-5 rounded-lg ${shadows.elevation2} hover:${shadows.elevation3} transition-all duration-300 transform hover:scale-105 relative overflow-hidden group`}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 animate-pulse-slow"></span>
                <span className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center">
                  <span className="mr-3 text-2xl">🐢</span> 
                  <H5
                    className="text-white font-bold drop-shadow-md m-0"
                    sm="heading4"
                    md="heading3"
                  >
                    Start Playing Now!
                  </H5>
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction Section with Turtle - moved from hero */}
      <section className={`py-12 sm:py-20 ${backgrounds.surface}`}>
        <Container variant="wide">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <H2 
                className="mb-6 text-primary" 
                sm="heading3" 
                md="heading2"
              >
                Your Adventure Awaits
              </H2>
              <Body1 
                color="secondary" 
                className="mb-6"
                sm="body2"
                md="body1"
              >
                Put your detective skills to the test with Turtle Soup, where you'll solve mysteries one question at a time!
              </Body1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="mr-3 text-primary text-xl">🔍</div>
                  <Body2>Ask yes/no questions</Body2>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary text-xl">🧩</div>
                  <Body2>Piece together clues</Body2>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary text-xl">🎯</div>
                  <Body2>Solve the mystery</Body2>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary text-xl">🎮</div>
                  <Body2>Have fun discovering</Body2>
                </div>
              </div>
              <Body1 
                className="mb-4"
                sm="body2"
                md="body1"
              >
                Join thousands of players who have already enjoyed solving our curious stories!
              </Body1>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Animated Book Logo */}
              <div className="w-full max-w-md relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
                <div className="relative rounded-xl overflow-hidden p-8 flex items-center justify-center bg-gradient-to-br from-cyan-100/90 to-blue-200/90 dark:from-cyan-900/90 dark:to-blue-800/90">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 animate-float">
                    <img 
                      src={bookLogo} 
                      alt="Book" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section - Now with more playful elements */}
      <section className={`py-12 sm:py-20 ${backgrounds.surfaceAlt}`}>
        <Container>
          <H2 
            className={`${textColors.primary} text-center mb-6`}
            sm="heading3"
            md="heading2"
          >
            How the Game Works
          </H2>
          <Body1 
            className="text-center mb-8 sm:mb-16 max-w-2xl mx-auto"
            sm="body2"
            md="body1"
          >
            Follow these simple steps to embark on your detective journey through mysterious stories!
          </Body1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className={`${backgrounds.surface} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-all duration-300 hover:-translate-y-2 h-full`}>
              <div className={`w-16 h-16 rounded-full ${backgrounds.accent} flex items-center justify-center mb-4 mx-auto`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <H3 
                className="mb-2 text-center"
                sm="heading4"
                md="heading3"
              >
                You're the Detective
              </H3>
              <Body1 
                className="text-center"
                sm="body2"
                md="body1"
              >
                As the detective, you'll ask Yes/No questions to uncover the hidden parts of the story.
                Use your sleuthing skills to piece together what happened!
              </Body1>
            </div>
            
            {/* Feature 2 */}
            <div className={`${backgrounds.surface} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-all duration-300 hover:-translate-y-2 h-full`}>
              <div className={`w-16 h-16 rounded-full ${backgrounds.success} flex items-center justify-center mb-4 mx-auto`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <H3 
                className="mb-2 text-center"
                sm="heading4"
                md="heading3"
              >
                Terry is Your Host
              </H3>
              <Body1 
                className="text-center"
                sm="body2"
                md="body1"
              >
                Terry the Turtle creates unique stories with surprising twists and answers your questions
                as you try to unravel the mystery.
              </Body1>
            </div>
            
            {/* Feature 3 */}
            <div className={`${backgrounds.surface} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-all duration-300 hover:-translate-y-2 h-full`}>
              <div className={`w-16 h-16 rounded-full ${backgrounds.warning} flex items-center justify-center mb-4 mx-auto`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <H3 
                className="mb-2 text-center"
                sm="heading4"
                md="heading3"
              >
                Track Your Progress
              </H3>
              <Body1 
                className="text-center"
                sm="body2"
                md="body1"
              >
                Terry will provide a percentage rating to show how much of the story
                you've correctly guessed so far.
              </Body1>
            </div>
            
            {/* Feature 4 */}
            <div className={`${backgrounds.surface} rounded-xl p-6 ${shadows.elevation1} hover:${shadows.elevation2} transition-all duration-300 hover:-translate-y-2 h-full`}>
              <div className={`w-16 h-16 rounded-full ${backgrounds.danger} flex items-center justify-center mb-4 mx-auto`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <H3 
                className="mb-2 text-center"
                sm="heading4"
                md="heading3"
              >
                Emotional Discovery
              </H3>
              <Body1 
                className="text-center"
                sm="body2"
                md="body1"
              >
                Experience the thrill of discovery as you finally understand the full story
                and the surprising twist that connects the beginning and end.
              </Body1>
            </div>
          </div>
        </Container>
      </section>

      {/* Add the bubble animation styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes button-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-button-float {
          animation: button-float 4s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 4s infinite ease-in-out;
        }
        
        .bubble-1 {
          width: 80px;
          height: 80px;
          left: 10%;
          top: 40%;
          animation-duration: 6s;
        }
        
        .bubble-2 {
          width: 40px;
          height: 40px;
          left: 20%;
          top: 70%;
          animation-duration: 8s;
        }
        
        .bubble-3 {
          width: 70px;
          height: 70px;
          right: 10%;
          top: 30%;
          animation-duration: 5s;
        }
        
        .bubble-4 {
          width: 50px;
          height: 50px;
          right: 20%;
          top: 60%;
          animation-duration: 7s;
        }
        
        .bubble-5 {
          width: 60px;
          height: 60px;
          left: 40%;
          top: 20%;
          animation-duration: 9s;
        }
        
        .bubble-6 {
          width: 45px;
          height: 45px;
          right: 40%;
          top: 80%;
          animation-duration: 10s;
        }
      `}</style>
    </div>
  );
}