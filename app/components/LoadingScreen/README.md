# Loading Screen Component

A customizable loading screen component for the Turtle Soup application.

## Features

- Full-page loading screen with app-themed styling
- Interactive turtle that follows the mouse cursor
- Customizable text, colors, and icon
- Optional progress bar
- Smooth animations and transitions
- Bubble background effects
- React Suspense integration

## LoadingScreen Component

### Basic Usage

```tsx
import { LoadingScreen } from '~/components/LoadingScreen';

// Simple usage with default settings
<LoadingScreen />
```

### Customization Options

```tsx
import { LoadingScreen } from '~/components/LoadingScreen';

// Customized loading screen
<LoadingScreen 
  text="Preparing your story..."  // Custom loading text
  color="#10B981"                 // Custom color for elements
  spinnerSize="lg"                // Size options: 'sm', 'md', 'lg'
  showProgressBar={true}          // Show a progress bar
  interactive={true}              // Enable/disable interactive elements
/>
```

### Custom Icon

```tsx
import { LoadingScreen } from '~/components/LoadingScreen';
import CustomIcon from '~/components/icons/CustomIcon';

// Using a custom icon instead of the default turtle
<LoadingScreen 
  icon={<CustomIcon className="w-24 h-24" />}
  text="Loading your adventure..."
/>
```

## LoadingSuspense Component

The LoadingSuspense component provides an easy way to integrate with React's Suspense API.

### Basic Usage

```tsx
import { LoadingSuspense, LoadingScreen } from '~/components/LoadingScreen';
import DynamicComponent from '~/components/DynamicComponent';

// Use LoadingSuspense to show the LoadingScreen while content is loading
<LoadingSuspense
  fallback={<LoadingScreen text="Loading dashboard..." />}
>
  <DynamicComponent />
</LoadingSuspense>
```

### Advanced Usage with React.lazy

```tsx
import React, { lazy } from 'react';
import { LoadingSuspense, LoadingScreen } from '~/components/LoadingScreen';

// Lazy-load a component
const LazyComponent = lazy(() => import('~/components/HeavyComponent'));

function MyComponent() {
  return (
    <LoadingSuspense
      fallback={
        <LoadingScreen 
          text="Loading content..." 
          showProgressBar={true}
        />
      }
    >
      <LazyComponent />
    </LoadingSuspense>
  );
}
```

## Properties

### LoadingScreen Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | "Loading..." | Text displayed during loading |
| `icon` | ReactNode | undefined | Custom icon to replace the default turtle |
| `color` | string | "#3B82F6" | Color for the spinner/progress bar |
| `interactive` | boolean | true | Enable/disable turtle interaction |
| `spinnerSize` | 'sm' \| 'md' \| 'lg' | 'md' | Size of the turtle/spinner |
| `showProgressBar` | boolean | false | Show/hide the progress bar |

### LoadingSuspense Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | ReactNode | Component to render when loaded |
| `fallback` | ReactNode | Component to show while loading | 