import React from 'react';
import { 
  typography, 
  backgrounds, 
  textColors, 
  borders, 
  shadows, 
  spacing, 
  layout 
} from '~/styling';
import Container from '~/components/basic/Container';
import { H1, H2, H3, H4, Body1, Body2, Label1, Code1 } from '~/components/basic/Typography';
import Card from '~/components/basic/Card';

function DesignSystemDemoPage() {
  return (
    <div className="py-12">
      <Container variant="wide">
        {/* Header */}
        <div className="mb-16 text-center">
          <H1 className={`${textColors.primary} mb-4`}>Turtle Soup Design System</H1>
          <Body1 className={`${textColors.onSurfaceMuted} max-w-2xl mx-auto`}>
            A comprehensive guide to our design language, components, and styling patterns.
            Use this system to create consistent, beautiful user interfaces for interactive storytelling.
          </Body1>
        </div>

        {/* Color System */}
        <section className="mb-20">
          <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
            <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Color System</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Primary Colors */}
              <div>
                <H3 className="mb-6">Primary Colors</H3>
                <div className="space-y-4">
                  <ColorSwatch 
                    name="Primary (Ocean Blue)" 
                    className={backgrounds.primary}
                    textClass={textColors.onPrimary}
                    value="Cyan 500" 
                  />
                  <ColorSwatch 
                    name="Secondary" 
                    className={backgrounds.secondary}
                    textClass={textColors.onPrimary}
                    value="Slate 500" 
                  />
                  <ColorSwatch 
                    name="Accent (Violet)" 
                    className={backgrounds.accent}
                    textClass={textColors.onPrimary}
                    value="Violet 500" 
                  />
                </div>
              </div>
              
              {/* Semantic Colors */}
              <div>
                <H3 className="mb-6">Semantic Colors</H3>
                <div className="space-y-4">
                  <ColorSwatch 
                    name="Success" 
                    className={backgrounds.success}
                    textClass={textColors.onPrimary}
                    value="Emerald 500" 
                  />
                  <ColorSwatch 
                    name="Warning" 
                    className={backgrounds.warning}
                    textClass={textColors.onWarning}
                    value="Amber 500" 
                  />
                  <ColorSwatch 
                    name="Danger" 
                    className={backgrounds.danger}
                    textClass={textColors.onPrimary}
                    value="Rose 500" 
                  />
                </div>
              </div>
            </div>
            
            {/* Story Mood Colors */}
            <div className="mt-12">
              <H3 className="mb-6">Story Mood Colors</H3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ColorSwatch 
                  name="Fun" 
                  className={backgrounds.fun}
                  textClass={textColors.onPrimary}
                  value="Amber 500" 
                />
                <ColorSwatch 
                  name="Creepy" 
                  className={backgrounds.creepy}
                  textClass={textColors.onPrimary}
                  value="Purple 500" 
                />
                <ColorSwatch 
                  name="Sweet" 
                  className={backgrounds.sweet}
                  textClass={textColors.onPrimary}
                  value="Pink 500" 
                />
              </div>
            </div>
            
            {/* Gradients */}
            <div className="mt-12">
              <H3 className="mb-6">Gradient Colors</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch 
                  name="Primary Gradient" 
                  className={backgrounds.primaryGradient}
                  textClass={textColors.onPrimary}
                  value="Cyan 500 → Cyan 600" 
                />
                <ColorSwatch 
                  name="Fun Gradient" 
                  className={backgrounds.funGradient}
                  textClass={textColors.onPrimary}
                  value="Amber 400 → Orange 500" 
                />
                <ColorSwatch 
                  name="Creepy Gradient" 
                  className={backgrounds.creepyGradient}
                  textClass={textColors.onPrimary}
                  value="Purple 500 → Indigo 600" 
                />
                <ColorSwatch 
                  name="Sweet Gradient" 
                  className={backgrounds.sweetGradient}
                  textClass={textColors.onPrimary}
                  value="Pink 400 → Rose 500" 
                />
              </div>
            </div>
            
            {/* Surface Colors */}
            <div className="mt-12">
              <H3 className="mb-6">Surface & Text Colors</H3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch 
                  name="Surface" 
                  className={backgrounds.surface}
                  textClass={textColors.onSurface}
                  value="Light: #ffffff | Dark: #111827" 
                />
                <ColorSwatch 
                  name="Surface Alt" 
                  className={backgrounds.surfaceAlt}
                  textClass={textColors.onSurface}
                  value="Light: #f9fafb | Dark: #1f2937" 
                />
                <div className={`p-4 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <Label1 className={textColors.onSurface}>Text On Surface</Label1>
                      <Body2 className={textColors.onSurfaceMuted}>Light: #111827 | Dark: #f9fafb</Body2>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${textColors.onSurface} bg-current`}></div>
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <Label1 className={textColors.onSurfaceMuted}>Text Muted</Label1>
                      <Body2 className={textColors.onSurfaceMuted}>Light: #6b7280 | Dark: #9ca3af</Body2>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${textColors.onSurfaceMuted} bg-current`}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Colors - Expanded Demo */}
            <div className="mt-12">
              <H3 className={`${textColors.primary} mb-6`}>Text Color System</H3>
              
              {/* Primary Text Colors */}
              <div className="mb-8">
                <H4 className={`${textColors.primary} mb-4`}>Primary & Secondary Text</H4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Primary Text</Label1>
                      <H3 className={textColors.primary}>Heading in Primary</H3>
                      <Body1 className={textColors.primary}>
                        This is body text in the primary color. It uses a neutral slate tone that works well
                        in both light and dark modes without competing with UI elements.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.primary} ${textColors.onPrimary}`}>
                        Primary
                      </div>
                      <div className={`px-3 py-1 rounded ${backgrounds.surfaceAlt}`}>
                        <Body2 className={textColors.primary}>Slate 800/200</Body2>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Secondary Text</Label1>
                      <H3 className={textColors.secondary}>Heading in Secondary</H3>
                      <Body1 className={textColors.secondary}>
                        Secondary text provides a subtle hierarchy. It's slightly lighter than primary
                        text but still maintains good readability for important content.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.secondary} ${textColors.onSecondary}`}>
                        Secondary
                      </div>
                      <div className={`px-3 py-1 rounded ${backgrounds.surfaceAlt}`}>
                        <Body2 className={textColors.secondary}>Slate 700/300</Body2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Accent & Muted Text */}
              <div className="mb-8">
                <H4 className={`${textColors.primary} mb-4`}>Accent & Muted Text</H4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Accent Text</Label1>
                      <H3 className={textColors.accent}>Heading in Accent</H3>
                      <Body1 className={textColors.primary}>
                        Regular text with <span className={textColors.accent}>important terms highlighted</span> using
                        the accent color. This creates visual interest and draws attention to key elements.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.accent} ${textColors.onAccent}`}>
                        Accent
                      </div>
                      <div className={`px-3 py-1 rounded ${backgrounds.surfaceAlt}`}>
                        <Body2 className={textColors.accent}>Violet 600/400</Body2>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Muted Text</Label1>
                      <H3 className={textColors.onSurfaceMuted}>Heading in Muted</H3>
                      <Body1 className={textColors.onSurfaceMuted}>
                        Muted text is used for less important information, hints, or supporting content
                        that shouldn't compete with the main content for attention.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.surfaceAlt}`}>
                        <Body2 className={textColors.onSurfaceMuted}>Slate 500/400</Body2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feedback Text Colors */}
              <div className="mb-8">
                <H4 className={`${textColors.primary} mb-4`}>Feedback Text Colors</H4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Success Text</Label1>
                      <Body1 className={textColors.success}>
                        This operation was completed successfully.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.success} ${textColors.onSuccess}`}>
                        Success
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Warning Text</Label1>
                      <Body1 className={textColors.warning}>
                        Please review this information carefully.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.warning} ${textColors.onWarning}`}>
                        Warning
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Danger Text</Label1>
                      <Body1 className={textColors.danger}>
                        This action cannot be undone.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.danger} ${textColors.onDanger}`}>
                        Danger
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Story Mood Text Colors */}
              <div>
                <H4 className={`${textColors.primary} mb-4`}>Story Mood Text</H4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Fun Text</Label1>
                      <Body1 className={textColors.fun}>
                        Let's go on an adventure!
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.fun} ${textColors.onPrimary}`}>
                        Fun
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Creepy Text</Label1>
                      <Body1 className={textColors.creepy}>
                        The shadows seemed to move...
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.creepy} ${textColors.onPrimary}`}>
                        Creepy
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${backgrounds.surface} border ${borders.surface}`}>
                    <div className="mb-4">
                      <Label1 className={textColors.onSurfaceMuted}>Sweet Text</Label1>
                      <Body1 className={textColors.sweet}>
                        The perfect happy ending.
                      </Body1>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className={`px-3 py-1 rounded ${backgrounds.sweet} ${textColors.onPrimary}`}>
                        Sweet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
            <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Typography System</H2>
            
            <div className="space-y-12">
              {/* Headings */}
              <div>
                <H3 className="mb-6">Headings</H3>
                <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 space-y-6`}>
                  <div>
                    <H1>Heading 1</H1>
                    <Code1 className="mt-2 text-xs">{typography.heading1}</Code1>
                  </div>
                  <div>
                    <H2>Heading 2</H2>
                    <Code1 className="mt-2 text-xs">{typography.heading2}</Code1>
                  </div>
                  <div>
                    <H3>Heading 3</H3>
                    <Code1 className="mt-2 text-xs">{typography.heading3}</Code1>
                  </div>
                  <div>
                    <H4>Heading 4</H4>
                    <Code1 className="mt-2 text-xs">{typography.heading4}</Code1>
                  </div>
                </div>
              </div>
              
              {/* Body Text */}
              <div>
                <H3 className="mb-6">Body Text</H3>
                <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 space-y-6`}>
                  <div>
                    <Body1>Body 1: The primary text style for content and paragraphs.</Body1>
                    <Code1 className="mt-2 text-xs">{typography.body1}</Code1>
                  </div>
                  <div>
                    <Body2>Body 2: Secondary text style for smaller content areas.</Body2>
                    <Code1 className="mt-2 text-xs">{typography.body2}</Code1>
                  </div>
                </div>
              </div>
              
              {/* Labels */}
              <div>
                <H3 className="mb-6">Labels & Utility Text</H3>
                <div className={`${backgrounds.surface} rounded-lg border ${borders.surface} p-6 space-y-6`}>
                  <div>
                    <Label1>LABEL 1: USED FOR FORM LABELS AND SMALL HEADERS</Label1>
                    <Code1 className="mt-2 text-xs">{typography.label1}</Code1>
                  </div>
                  <div>
                    <Code1>// Code 1: Used for displaying code snippets and technical content</Code1>
                    <Code1 className="mt-2 text-xs">{typography.code1}</Code1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-20">
          <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
            <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Shadow System</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${backgrounds.surface} p-6 rounded-lg ${shadows.elevation1} h-40 flex items-center justify-center`}>
                <div>
                  <Body1 className="text-center mb-2">Elevation 1</Body1>
                  <Code1 className="text-xs">{shadows.elevation1}</Code1>
                </div>
              </div>
              <div className={`${backgrounds.surface} p-6 rounded-lg ${shadows.elevation2} h-40 flex items-center justify-center`}>
                <div>
                  <Body1 className="text-center mb-2">Elevation 2</Body1>
                  <Code1 className="text-xs">{shadows.elevation2}</Code1>
                </div>
              </div>
              <div className={`${backgrounds.surface} p-6 rounded-lg ${shadows.elevation3} h-40 flex items-center justify-center`}>
                <div>
                  <Body1 className="text-center mb-2">Elevation 3</Body1>
                  <Code1 className="text-xs">{shadows.elevation3}</Code1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
            <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Spacing System</H2>
            
            <div className="space-y-12">
              {/* Padding */}
              <div>
                <H3 className="mb-6">Padding</H3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <SpacingExample name="XS" className={spacing.xs} value={spacing.xs} />
                  <SpacingExample name="SM" className={spacing.sm} value={spacing.sm} />
                  <SpacingExample name="MD" className={spacing.md} value={spacing.md} />
                  <SpacingExample name="LG" className={spacing.lg} value={spacing.lg} />
                  <SpacingExample name="XL" className={spacing.xl} value={spacing.xl} />
                </div>
              </div>
              
              {/* Inline Spacing */}
              <div>
                <H3 className="mb-6">Inline Spacing (Horizontal)</H3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <SpacingExample name="Inline XS" className={spacing.inlineXs} value={spacing.inlineXs} />
                  <SpacingExample name="Inline SM" className={spacing.inlineSm} value={spacing.inlineSm} />
                  <SpacingExample name="Inline MD" className={spacing.inlineMd} value={spacing.inlineMd} />
                  <SpacingExample name="Inline LG" className={spacing.inlineLg} value={spacing.inlineLg} />
                  <SpacingExample name="Inline XL" className={spacing.inlineXl} value={spacing.inlineXl} />
                </div>
              </div>
              
              {/* Block Spacing */}
              <div>
                <H3 className="mb-6">Block Spacing (Vertical)</H3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <SpacingExample name="Block XS" className={spacing.blockXs} value={spacing.blockXs} />
                  <SpacingExample name="Block SM" className={spacing.blockSm} value={spacing.blockSm} />
                  <SpacingExample name="Block MD" className={spacing.blockMd} value={spacing.blockMd} />
                  <SpacingExample name="Block LG" className={spacing.blockLg} value={spacing.blockLg} />
                  <SpacingExample name="Block XL" className={spacing.blockXl} value={spacing.blockXl} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layout */}
        <section className="mb-20">
          <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
            <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Layout System</H2>
            
            <div className="space-y-12">
              {/* Containers */}
              <div>
                <H3 className="mb-6">Container Variants</H3>
                <div className="space-y-6">
                  <div>
                    <H4 className="mb-2">Fluid Container</H4>
                    <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-4`}>
                      <div className={`${backgrounds.primary} ${textColors.onPrimary} p-4 rounded-lg`}>
                        <Body1>Fluid Container: {layout.containerFluid}</Body1>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4 className="mb-2">Narrow Container</H4>
                    <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-4`}>
                      <div className={`${backgrounds.accent} ${textColors.onPrimary} p-4 rounded-lg max-w-3xl mx-auto`}>
                        <Body1>Narrow Container: {layout.containerNarrow}</Body1>
                      </div>
                    </div>
                  </div>
                  <div>
                    <H4 className="mb-2">Wide Container</H4>
                    <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-4`}>
                      <div className={`${backgrounds.success} ${textColors.onPrimary} p-4 rounded-lg max-w-7xl mx-auto`}>
                        <Body1>Wide Container: {layout.containerWide}</Body1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

// Color Swatch Component
function ColorSwatch({ 
  name, 
  className, 
  textClass = textColors.onSurface,
  value 
}: { 
  name: string; 
  className: string;
  textClass?: string;
  value: string;
}) {
  return (
    <div className={`rounded-lg overflow-hidden border ${borders.surface}`}>
      <div className={`${className} h-24 flex items-center justify-center`}>
        <Label1 className={textClass}>{name}</Label1>
      </div>
      <div className={`${backgrounds.surface} p-4`}>
        <Body2 className={textColors.onSurfaceMuted}>{value}</Body2>
      </div>
    </div>
  );
}

// Spacing Example Component
function SpacingExample({ 
  name, 
  className, 
  value 
}: { 
  name: string; 
  className: string;
  value: string;
}) {
  return (
    <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg overflow-hidden`}>
      <div className={`${backgrounds.primary} ${className} flex items-center justify-center`}>
        <div className={`bg-white/20 w-full h-full`}></div>
      </div>
      <div className="p-3">
        <Label1 className="text-sm mb-1">{name}</Label1>
        <Code1 className="text-xs">{value}</Code1>
      </div>
    </div>
  );
}

export default DesignSystemDemoPage; 