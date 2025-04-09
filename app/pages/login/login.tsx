import React from 'react';
import { backgrounds, shadows, textColors } from '~/styling';
import { cn } from '~/lib/utils';
import { Container, H1, H2, H3, H4, Body1, Body2, Button, Label1 } from '~/components/basic';
import { Link } from 'react-router';
import turtleLogo from '~/assets/images/logo-app-turtle.png';
import bookLogo from '~/assets/images/logo-app-book.png';

export default function LoginPage() {
  // This function will be implemented by you
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Your authentication logic will go here
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="w-full h-full max-w-md mx-auto sm:py-8 sm:px-4">
        <div className={cn(
          "h-full w-full overflow-hidden flex flex-col",
          "bg-white dark:bg-slate-800",
          "sm:rounded-2xl sm:border sm:border-blue-100 sm:dark:border-blue-900",
          "sm:h-auto",
          shadows.elevation3
        )}>
          {/* Header with gradient background */}
          <div className={cn(
            "p-6 sm:p-8 text-center relative overflow-hidden",
            "bg-gradient-to-r from-purple-600 to-blue-600"
          )}>
            {/* Background bubbles for underwater theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
            </div>
            
            <div className="inline-block mb-4 relative z-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <img 
                  src={turtleLogo} 
                  alt="Terry the Turtle" 
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>
            <H2 className="text-white mb-2 drop-shadow-md relative z-10">Welcome to Turtle Soup</H2>
            <Body1 className="text-white/90 relative z-10">Sign in to start solving mysteries</Body1>
          </div>

          {/* Login form */}
          <div className="p-6 sm:p-8 flex-grow flex flex-col">
            <div className="mb-8 text-center">
              <H3 className="text-primary mb-3">Sign In</H3>
              <Body2 color="secondary">
                Use your Google account to sign in and track your progress across devices
              </Body2>
            </div>

            {/* Google login button */}
            <button 
              onClick={handleGoogleLogin}
              className={cn(
                "w-full py-3 px-4 mb-6 flex items-center justify-center gap-3",
                "rounded-lg border border-gray-200 dark:border-gray-700",
                "bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600",
                "transition-colors duration-200",
                "active:scale-[0.98]",
                shadows.elevation1
              )}
            >
              {/* Google logo */}
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"/>
                <path d="M12 4.8C13.6208 4.8 15.072 5.3536 16.2048 6.26016L19.2 3.26496C17.184 1.24704 14.7216 0 12 0C7.3968 0 3.472 2.68512 1.32 6.62496L4.8 9.35904C5.78496 6.74016 8.64 4.8 12 4.8Z" fill="#EA4335"/>
                <path d="M23.04 12.2736C23.04 11.4 22.9632 10.56 22.8 9.75984H12V14.4H18.1728C17.928 15.8688 17.088 17.1216 15.8352 17.9376L19.1808 20.6016C21.36 18.6 22.7808 15.7824 23.04 12.2736Z" fill="#4285F4"/>
                <path d="M4.80001 12C4.80001 11.328 4.92001 10.6848 5.11201 10.0896L1.64001 7.35547C0.600001 8.72067 0 10.3023 0 12C0 13.6976 0.600001 15.2793 1.64001 16.6445L5.11201 13.9105C4.92001 13.3152 4.80001 12.672 4.80001 12Z" fill="#FBBC05"/>
                <path d="M12 19.2C15.3648 19.2 18.2256 17.2656 19.2 14.4H15.84C14.9232 15.5616 13.56 16.32 12 16.32C8.64 16.32 5.79361 14.3856 4.79999 11.7712L1.32001 14.5056C3.48 18.4448 7.40643 24 12 24C14.7072 24 17.184 19.9728 19.2 17.9381L12 19.2Z" fill="#34A853"/>
              </svg>

              <Label1 color="secondary" className="font-medium">Continue with Google</Label1>
            </button>

            {/* Note about account */}
            <div className="text-center mt-auto">
              <Body2 color="secondary" className="text-sm mb-6">
                By signing in, you agree to our Terms of Service and Privacy Policy
              </Body2>
              
              {/* Back to home link */}
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                <Label1 color="primary" className="text-sm font-medium">Back to Home</Label1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Adding animation classes directly in the style tag */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .bubble {
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: float 4s infinite ease-in-out;
          }
          
          .bubble-1 {
            width: 60px;
            height: 60px;
            left: 10%;
            top: 20%;
            animation-duration: 6s;
          }
          
          .bubble-2 {
            width: 30px;
            height: 30px;
            right: 20%;
            top: 30%;
            animation-duration: 8s;
          }
          
          .bubble-3 {
            width: 45px;
            height: 45px;
            left: 30%;
            bottom: 10%;
            animation-duration: 5s;
          }
        `}
      </style>
    </div>
  );
}