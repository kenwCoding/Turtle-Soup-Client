import React from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { backgrounds, borders, textColors, typography } from './styling';
import Navbar from "./components/Navbar/Navbar";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:wght@400;500;600;700;800&display=swap",
  },
];

// Simple Footer component
function Footer() {
  return (
    <footer className={`${backgrounds.surfaceAlt} py-8 border-t ${borders.surface}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className={`${typography.heading4} ${textColors.primary} mb-4`}>Design System</h3>
            <p className={`${typography.body2} ${textColors.onSurfaceMuted} max-w-md`}>
              A modern, responsive design system built with Tailwind CSS and TypeScript.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className={`${typography.label1} mb-4`}>Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Documentation</a></li>
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Tutorials</a></li>
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`${typography.label1} mb-4`}>Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>About</a></li>
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Blog</a></li>
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`${typography.label1} mb-4`}>Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Privacy</a></li>
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>Terms</a></li>
                <li><a href="#" className={`${typography.body2} ${textColors.onSurfaceMuted} hover:${textColors.primary}`}>License</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t ${borders.surface} ${textColors.onSurfaceMuted} ${typography.body3} text-center`}>
          © {new Date().getFullYear()} Design System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const excludeRoutes = [
    {
      path: "/login",
      isShowNavBar: false,
      isShowFooter: false,
    }
  ];
  const { pathname } = useLocation();
  
  const isNavBarExcluded = excludeRoutes.some(route => route.path === pathname && route.isShowNavBar === false);
  const isFooterExcluded = excludeRoutes.some(route => route.path === pathname && route.isShowFooter === false);

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Check for saved theme preference or OS preference
              const darkMode = localStorage.getItem('darkMode');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              // If dark mode is explicitly enabled or user prefers dark and has no saved preference
              if (darkMode === 'true' || (prefersDark && darkMode === null)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `
        }} />
        <meta name="color-scheme" />
      </head>
      <body className={`${backgrounds.surface} flex flex-col min-h-screen`}>
        {!isNavBarExcluded ? <Navbar /> : null}
        <main className="flex-grow">
          {children}
        </main>
        {!isFooterExcluded ? <Footer /> : null}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className={typography.heading1}>{message}</h1>
      <p className={typography.body1}>{details}</p>
      {stack && (
        <pre className={`w-full p-4 overflow-x-auto ${backgrounds.surfaceAlt} rounded-lg mt-4`}>
          <code className={typography.code1}>{stack}</code>
        </pre>
      )}
    </main>
  );
}
