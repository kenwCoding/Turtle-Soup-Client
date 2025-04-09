import React from 'react';
import { 
  typography, 
  backgrounds, 
  textColors, 
  borders
} from '~/styling';
import Container from '~/components/basic/Container';
import Typography, { H1, H2, H3, H4, Body1, Body2, Body3, Label1, Code1 } from '~/components/basic/Typography';
import Card from '~/components/basic/Card';

function ResponsiveTypographyDemo() {
  return (
    <div className="py-12">
      <Container variant="wide">
        {/* Header */}
        <div className="mb-16 text-center">
          <H1 className={`${textColors.primary} mb-4`}>Responsive Typography Demo</H1>
          <Body1 className={`${textColors.onSurfaceMuted} max-w-2xl mx-auto`}>
            A showcase of responsive typography components that change based on screen size.
            Resize your browser window to see the typography change at different breakpoints.
          </Body1>
        </div>

        {/* Responsive Typography Examples */}
        <section className="mb-20">
          <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 border ${borders.surface}`}>
            <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Responsive Typography Examples</H2>
            
            {/* Example 1: Direct class usage */}
            <div className="mb-16">
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <H3 
                  sm="heading2"
                  md="heading1"
                  className="mb-4"
                >
                  Using direct typography classes at breakpoints
                </H3>
                <Body2>
                  Base: heading3 / sm: heading2 / md: heading1
                </Body2>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<H3 sm="heading2" md="heading1">Using direct typography classes at breakpoints</H3>`}
                  </Code1>
                </div>
              </div>
            </div>

            {/* Example 2: Progressive scaling */}
            <div className="mb-16">
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <H4 
                  md="heading3"
                  lg="heading2"
                  xl="heading1"
                  className="mb-4"
                >
                  Progressive text scaling with screen size
                </H4>
                <Body2>
                  Base: heading4 / md: heading3 / lg: heading2 / xl: heading1
                </Body2>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<H4 md="heading3" lg="heading2" xl="heading1">Progressive text scaling with screen size</H4>`}
                  </Code1>
                </div>
              </div>
            </div>

            {/* Example 3: Body Text Scaling */}
            <div className="mb-16">
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <Body2 
                  md="body1"
                  lg="heading4"
                  className="mb-4"
                >
                  This body text becomes more prominent on larger screens
                </Body2>
                <Body3>
                  Base: body2 / md: body1 / lg: heading4
                </Body3>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<Body2 md="body1" lg="heading4">This body text becomes more prominent on larger screens</Body2>`}
                  </Code1>
                </div>
              </div>
            </div>

            {/* Example 4: Applying custom styles with className */}
            <div className="mb-16">
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <H3 
                  md="heading2"
                  className="mb-4 text-blue-600 dark:text-blue-400 sm:italic md:not-italic lg:underline"
                >
                  Custom styles via className property
                </H3>
                <Body2>
                  Use the className property for custom Tailwind classes including responsive variants
                </Body2>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<H3 
  md="heading2"
  className="mb-4 text-blue-600 dark:text-blue-400 sm:italic md:not-italic lg:underline"
>
  Custom styles via className property
</H3>`}
                  </Code1>
                </div>
              </div>
            </div>

            {/* Generic Typography Component Example */}
            <div className="mb-16">
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <div className="mb-4">
                  {/* Using the generic Typography component */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <Typography 
                        variant="h3"
                        md="heading2"
                        lg="heading1"
                      >
                        Generic Typography Component
                      </Typography>
                      <Body2>Base: heading3 / md: heading2 / lg: heading1</Body2>
                    </div>
                    <div>
                      <Typography 
                        variant="body2"
                        md="body1"
                        lg="heading4"
                      >
                        This text uses the generic Typography component
                      </Typography>
                      <Body3>Base: body2 / md: body1 / lg: heading4</Body3>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<Typography variant="h3" md="heading2" lg="heading1">
  Generic Typography Component
</Typography>

<Typography variant="body2" md="body1" lg="heading4">
  This text uses the generic Typography component
</Typography>`}
                  </Code1>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div>
              <H3 className="mb-4">How It Works</H3>
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <Body1 className="mb-4">
                  The responsive typography system uses Tailwind's breakpoints to progressively enhance typography styles using pre-defined class names in <Code1 className="text-xs inline">styling.ts</Code1>:
                </Body1>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>sm:</strong> 640px and above</li>
                  <li><strong>md:</strong> 768px and above</li>
                  <li><strong>lg:</strong> 1024px and above</li>
                  <li><strong>xl:</strong> 1280px and above</li>
                  <li><strong>2xl:</strong> 1536px and above</li>
                </ul>
                <Body1 className="mb-4">
                  To use responsive typography, add the breakpoint props to any typography component with class names from the typography object:
                </Body1>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<H3 md="heading2" lg="heading1">This text will use heading3 by default, heading2 at md breakpoint, and heading1 at lg breakpoint</H3>`}
                  </Code1>
                </div>
                <Body1 className="mt-4 mb-2">
                  Our system has pre-defined responsive variants for all typography styles in the format <Code1 className="text-xs inline">{`"${"breakpoint"}:${"style"}"`}</Code1>, which ensures compatibility with Tailwind's compilation process.
                </Body1>
                <Body1 className="mb-4">
                  For custom styles including responsive variants, use Tailwind classes directly in the className prop:
                </Body1>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md mb-4">
                  <Code1 className="text-xs">
                    {`<H3 md="heading2" className="text-blue-600 dark:text-blue-400 sm:italic lg:underline">
  Custom styles with breakpoints via className
</H3>`}
                  </Code1>
                </div>
                <Body1 className="mt-4 mb-2">
                  Best practices for responsive typography:
                </Body1>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use typography that scales up on larger screens to take advantage of increased screen real estate</li>
                  <li>Only use predefined typography classes from <Code1 className="text-xs inline">styling.ts</Code1> with the breakpoint props</li>
                  <li>For custom Tailwind classes including responsive variants, use the className property</li>
                  <li>Not every breakpoint needs to be specified - only add the ones where you want changes</li>
                  <li>Maintain appropriate hierarchy regardless of screen size</li>
                </ul>
              </div>
            </div>

            {/* Caption Example */}
            <div className="mb-16">
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <div className="mb-4">
                  <img 
                    src="https://placehold.co/600x400" 
                    alt="Example image" 
                    className="w-full h-auto rounded-md mb-2" 
                  />
                  <Typography 
                    variant="caption"
                    md="body3" 
                    lg="body2"
                    className="text-gray-500"
                  >
                    Caption text that grows from small caption to body text on larger screens
                  </Typography>
                </div>
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<Typography 
  variant="caption"
  md="body3" 
  lg="body2"
  className="text-gray-500"
>
  Caption text that grows from small caption to body text on larger screens
</Typography>`}
                  </Code1>
                </div>
              </div>
            </div>

            {/* Real-World Example */}
            <div className="mb-16">
              <H3 className="mb-4">Real-World Example: Article Card</H3>
              <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 mb-4`}>
                <div className="mb-8 max-w-3xl mx-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:shrink-0">
                        <img 
                          src="https://placehold.co/800x600/3b82f6/ffffff?text=Article+Image" 
                          alt="Article cover" 
                          className="h-48 w-full object-cover md:h-full md:w-48"
                        />
                      </div>
                      <div className="p-6">
                        <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">Case Study</div>
                        <H3 
                          md="heading2"
                          className="mt-1 mb-2"
                        >
                          Responsive Design Best Practices
                        </H3>
                        <Body2 
                          md="body1"
                          className="mt-2 text-gray-500 dark:text-gray-400"
                        >
                          Learn how to implement responsive design patterns that work across all device sizes and provide a consistent user experience.
                        </Body2>
                        <div className="mt-4 flex items-center">
                          <img 
                            src="https://placehold.co/100/4ade80/ffffff?text=Avatar" 
                            alt="Author" 
                            className="h-10 w-10 rounded-full mr-2"
                          />
                          <div>
                            <Body2 className="font-medium">Sarah Johnson</Body2>
                            <Typography 
                              variant="caption"
                              className="text-gray-500"
                            >
                              May 15, 2023 · 8 min read
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <Code1 className="text-xs">
                    {`<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img 
        src="article-image.jpg" 
        alt="Article cover" 
        className="h-48 w-full object-cover md:h-full md:w-48"
      />
    </div>
    <div className="p-6">
      <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">Case Study</div>
      <H3 
        md="heading2"
        className="mt-1 mb-2"
      >
        Responsive Design Best Practices
      </H3>
      <Body2 
        md="body1"
        className="mt-2 text-gray-500 dark:text-gray-400"
      >
        Learn how to implement responsive design patterns that work across all device sizes...
      </Body2>
      <div className="mt-4 flex items-center">
        <img src="avatar.jpg" alt="Author" className="h-10 w-10 rounded-full mr-2" />
        <div>
          <Body2 className="font-medium">Sarah Johnson</Body2>
          <Typography variant="caption" className="text-gray-500">
            May 15, 2023 · 8 min read
          </Typography>
        </div>
      </div>
    </div>
  </div>
</div>`}
                  </Code1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ResponsiveTypographyDemo; 