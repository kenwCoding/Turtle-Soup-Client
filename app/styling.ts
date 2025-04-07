/**
 * Theme System - TypeScript object mapping
 * 
 * This file contains all theme styling definitions previously defined in app.css
 * Each category is organized into its own object for better maintainability
 */

// Typography System
export const typography = {
  // Headings
  heading1: "text-4xl font-bold tracking-tight font-montserrat",
  heading2: "text-3xl font-bold tracking-tight font-montserrat",
  heading3: "text-2xl font-bold font-montserrat",
  heading4: "text-xl font-semibold font-montserrat",
  heading5: "text-lg font-semibold font-montserrat",
  
  // Body text
  body1: "text-base font-normal font-inter",
  body2: "text-sm font-normal font-inter",
  body3: "text-xs font-normal font-inter",
  
  // Labels
  label1: "text-sm font-medium uppercase tracking-wider font-montserrat",
  label2: "text-xs font-medium uppercase tracking-wider font-montserrat",
  
  // Code
  code1: "font-mono text-sm",
  
  // Base font
  fontBase: "font-inter"
};

// Color System - Base Palette
export const colors = {
  // Primary colors - Changed to Ocean Blue for Turtle Soup
  primary: {
    50: "bg-cyan-50 dark:bg-cyan-950",
    100: "bg-cyan-100 dark:bg-cyan-900",
    200: "bg-cyan-200 dark:bg-cyan-800",
    300: "bg-cyan-300 dark:bg-cyan-700",
    400: "bg-cyan-400 dark:bg-cyan-600",
    500: "bg-cyan-500 dark:bg-cyan-500", // Main primary color
    600: "bg-cyan-600 dark:bg-cyan-400",
    700: "bg-cyan-700 dark:bg-cyan-300",
    800: "bg-cyan-800 dark:bg-cyan-200",
    900: "bg-cyan-900 dark:bg-cyan-100",
    950: "bg-cyan-950 dark:bg-cyan-50",
  },
  
  // Neutral colors - Slate (works well for text and backgrounds)
  neutral: {
    50: "bg-slate-50 dark:bg-slate-950",
    100: "bg-slate-100 dark:bg-slate-900",
    200: "bg-slate-200 dark:bg-slate-800",
    300: "bg-slate-300 dark:bg-slate-700",
    400: "bg-slate-400 dark:bg-slate-600",
    500: "bg-slate-500 dark:bg-slate-500",
    600: "bg-slate-600 dark:bg-slate-400",
    700: "bg-slate-700 dark:bg-slate-300",
    800: "bg-slate-800 dark:bg-slate-200",
    900: "bg-slate-900 dark:bg-slate-100",
    950: "bg-slate-950 dark:bg-slate-50",
  },
  
  // Story mood colors
  fun: {
    50: "bg-amber-50 dark:bg-amber-950",
    100: "bg-amber-100 dark:bg-amber-900",
    300: "bg-amber-300 dark:bg-amber-700",
    500: "bg-amber-500 dark:bg-amber-500", // Main fun color
    700: "bg-amber-700 dark:bg-amber-300",
    900: "bg-amber-900 dark:bg-amber-100",
  },
  
  creepy: {
    50: "bg-purple-50 dark:bg-purple-950",
    100: "bg-purple-100 dark:bg-purple-900",
    300: "bg-purple-300 dark:bg-purple-700",
    500: "bg-purple-500 dark:bg-purple-500", // Main creepy color
    700: "bg-purple-700 dark:bg-purple-300",
    900: "bg-purple-900 dark:bg-purple-100",
  },
  
  sweet: {
    50: "bg-pink-50 dark:bg-pink-950",
    100: "bg-pink-100 dark:bg-pink-900",
    300: "bg-pink-300 dark:bg-pink-700",
    500: "bg-pink-500 dark:bg-pink-500", // Main sweet color
    700: "bg-pink-700 dark:bg-pink-300",
    900: "bg-pink-900 dark:bg-pink-100",
  },
  
  // Feedback colors
  success: {
    100: "bg-emerald-100 dark:bg-emerald-900",
    300: "bg-emerald-300 dark:bg-emerald-700",
    500: "bg-emerald-500 dark:bg-emerald-500", // Main success color
    700: "bg-emerald-700 dark:bg-emerald-300",
  },
  
  warning: {
    100: "bg-amber-100 dark:bg-amber-900",
    300: "bg-amber-300 dark:bg-amber-700",
    500: "bg-amber-500 dark:bg-amber-500", // Main warning color
    700: "bg-amber-700 dark:bg-amber-300",
  },
  
  danger: {
    100: "bg-rose-100 dark:bg-rose-900",
    300: "bg-rose-300 dark:bg-rose-700",
    500: "bg-rose-500 dark:bg-rose-500", // Main danger color
    700: "bg-rose-700 dark:bg-rose-300",
  },
  
  // Add disabled colors
  disabled: {
    100: "bg-slate-100 dark:bg-slate-800",
    200: "bg-slate-200 dark:bg-slate-700",
    300: "bg-slate-300 dark:bg-slate-600",
    500: "bg-slate-400 dark:bg-slate-500", // Main disabled color
  },
  
  // Change accent to a soft lavender/purple - complements cyan well
  accent: {
    50: "bg-violet-50 dark:bg-violet-950",
    100: "bg-violet-100 dark:bg-violet-900",
    300: "bg-violet-300 dark:bg-violet-700",
    500: "bg-violet-500 dark:bg-violet-500", // Main accent color
    700: "bg-violet-700 dark:bg-violet-300",
    900: "bg-violet-900 dark:bg-violet-100",
  },
};

// Background colors - Semantic usage
export const backgrounds = {
  // Main backgrounds
  primary: colors.primary[500],
  secondary: colors.neutral[500],
  
  // Story mood backgrounds
  fun: colors.fun[500],
  funLight: colors.fun[100],
  funDark: colors.fun[700],
  
  creepy: colors.creepy[500],
  creepyLight: colors.creepy[100],
  creepyDark: colors.creepy[700],
  
  sweet: colors.sweet[500],
  sweetLight: colors.sweet[100],
  sweetDark: colors.sweet[700],
  
  // Feedback backgrounds
  success: colors.success[500],
  successLight: colors.success[100],
  
  warning: colors.warning[500],
  warningLight: colors.warning[100],
  
  danger: colors.danger[500],
  dangerLight: colors.danger[100],
  
  // Update gradients to use cyan for primary
  primaryGradient: "bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700",
  
  // Keep accent as teal
  accent: colors.accent[500],
  accentLight: colors.accent[100],
  accentDark: colors.accent[700],
  
  // Add disabled background
  disabled: colors.disabled[500],
  disabledLight: colors.disabled[100],
  
  // Surface colors
  surface: "bg-white dark:bg-slate-900",
  surfaceAlt: "bg-slate-50 dark:bg-slate-800",
  
  // Gradients for storytelling moods
  funGradient: "bg-gradient-to-r from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-600",
  creepyGradient: "bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700",
  sweetGradient: "bg-gradient-to-r from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600",
  mysteryGradient: "bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-600 dark:to-slate-800",
};

// Text colors
export const textColors = {
  // Primary text colors - Changed to slate for a more neutral, monotone look
  primary: "text-slate-800 dark:text-slate-200", // Neutral monotone color for primary text
  secondary: "text-slate-700 dark:text-slate-300",
  
  // Story mood text colors with improved contrast
  fun: "text-amber-800 dark:text-amber-200",
  creepy: "text-purple-900 dark:text-purple-200",
  sweet: "text-pink-800 dark:text-pink-200",
  
  // Feedback text colors with improved contrast
  success: "text-emerald-800 dark:text-emerald-200",
  warning: "text-amber-800 dark:text-amber-200",
  danger: "text-rose-800 dark:text-rose-200",
  
  // Change accent to soft violet
  accent: "text-violet-600 dark:text-violet-400",
  brand: "text-cyan-600 dark:text-cyan-400",
  
  // On-color text colors - ensuring visibility on colored backgrounds
  onPrimary: "text-white dark:text-white",
  onSecondary: "text-white dark:text-white",
  onSuccess: "text-white dark:text-white",
  onWarning: "text-slate-900 dark:text-slate-900", // Dark text on warning for better contrast
  onDanger: "text-white dark:text-white",
  onAccent: "text-white dark:text-white",
  
  // For light backgrounds in light mode, dark text; for dark backgrounds in dark mode, light text
  onPrimaryLight: "text-cyan-900 dark:text-cyan-100",
  onSecondaryLight: "text-slate-900 dark:text-slate-100",
  onSuccessLight: "text-emerald-900 dark:text-emerald-100",
  onWarningLight: "text-amber-900 dark:text-amber-100",
  onDangerLight: "text-rose-900 dark:text-rose-100",
  onAccentLight: "text-violet-900 dark:text-violet-100",
  
  // For dark backgrounds in light mode, light text; for light backgrounds in dark mode, dark text
  onPrimaryDark: "text-white dark:text-cyan-900",
  onSecondaryDark: "text-white dark:text-slate-900",
  onSuccessDark: "text-white dark:text-emerald-900",
  onWarningDark: "text-white dark:text-amber-900",
  onDangerDark: "text-white dark:text-rose-900",
  onAccentDark: "text-white dark:text-violet-900",
  
  // Disabled text
  disabled: "text-slate-400 dark:text-slate-600",

  // Surface text
  onSurface: "text-slate-900 dark:text-slate-100",
  onSurfaceMedium: "text-slate-700 dark:text-slate-300",
  onSurfaceMuted: "text-slate-500 dark:text-slate-400",
};

// Border colors
export const borders = {
  // Primary border remains cyan
  primary: "border-cyan-500 dark:border-cyan-400",
  secondary: "border-slate-500 dark:border-slate-400",
  success: "border-emerald-500 dark:border-emerald-400",
  warning: "border-amber-500 dark:border-amber-400",
  danger: "border-rose-500 dark:border-rose-400",
  
  // Update accent border to violet
  accent: "border-violet-600 dark:border-violet-400",
  
  // Add disabled border
  disabled: "border-slate-300 dark:border-slate-700",
  
  // Surface borders
  surface: "border-slate-200 dark:border-slate-700",
  surfaceLight: "border-slate-100 dark:border-slate-800",
  surfaceMedium: "border-slate-300 dark:border-slate-600",
  surfaceHeavy: "border-slate-400 dark:border-slate-500",
  
  // Update focus state to cyan
  focus: "ring-2 ring-cyan-500 dark:ring-cyan-400 ring-opacity-50",
};

// Shadows
export const shadows = {
  elevation1: "shadow-soft dark:shadow-none",
  elevation2: "shadow-medium dark:shadow-none",
  elevation3: "shadow-hard dark:shadow-none"
};

// Spacing System
export const spacing = {
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
  
  // Inline spacing (horizontal)
  inlineXs: "px-1",
  inlineSm: "px-2",
  inlineMd: "px-4",
  inlineLg: "px-6",
  inlineXl: "px-8",
  
  // Block spacing (vertical)
  blockXs: "py-1",
  blockSm: "py-2",
  blockMd: "py-4",
  blockLg: "py-6",
  blockXl: "py-8"
};

// Layout Components
export const layout = {
  containerFluid: "w-full px-4 mx-auto sm:px-6 lg:px-8 font-base",
  containerNarrow: "w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-3xl font-base",
  containerWide: "w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl font-base",
  card: "bg-surface rounded-lg border border-surface shadow-elevation-1 dark:bg-surface dark:border-gray-700"
};

// Export all theme objects as a single theme object
export const theme = {
  typography,
  colors,
  backgrounds,
  textColors,
  borders,
  shadows,
  spacing,
  layout
};

export default theme;
