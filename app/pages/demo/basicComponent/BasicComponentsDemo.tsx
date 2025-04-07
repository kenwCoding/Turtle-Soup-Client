import React, { useState } from 'react';
import { 
  typography, 
  backgrounds, 
  textColors, 
  borders, 
  shadows, 
  spacing 
} from '~/styling';
import Container from '~/components/basic/Container';
import { H1, H2, H3, H4, Body1, Body2, Body3, Label1, Label2, Code1 } from '~/components/basic/Typography';
import Card from '~/components/basic/Card';
import Button from '~/components/basic/Button';

const COMPONENT_LIST = ["Containers", "Typography", "Button", "Card"];

const BasicComponentsDemo = () => {
  const [activeTab, setActiveTab] = useState('Containers');
  
  return (
    <div className="py-12">
      <Container variant="wide">
        {/* Header */}
        <div className="mb-16 text-center">
          <H1 className="mb-4" color="primary">Basic Components</H1>
          <Body1 className="max-w-2xl mx-auto" color="onSurfaceMuted">
            A collection of reusable UI components built with our design system.
            Use these components to quickly build consistent interfaces.
          </Body1>
        </div>
        
        {/* Component Navigation */}
        <div className="mb-12">
          <div className={`flex flex-wrap border-b ${borders.surface}`}>
            {COMPONENT_LIST.map((component, index) => (
              <TabButton 
                key={index}
                active={activeTab === component} 
                onClick={() => setActiveTab(component)}
              >
                {component}
              </TabButton>
            ))}
          </div>
        </div>
        
        {/* Container Components */}
        {activeTab === 'Containers' && (
          <section>
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
              <H2 className={`mb-8 pb-4 border-b ${borders.surface}`} color="primary">Container Components</H2>
              
              <div className="space-y-12">
                {/* Fluid Container */}
                <div>
                  <H3 className="mb-6">Fluid Container</H3>
                  <div className="mb-4">
                    <Body1>The fluid container takes up the full width of its parent with consistent padding.</Body1>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-4 mb-4`}>
                    <Container variant="fluid" className={`${backgrounds.primary} p-8 rounded-lg`}>
                      <Body1 color="onPrimary">This is a fluid container</Body1>
                    </Container>
                  </div>
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<Container variant="fluid">
  Your content here
</Container>`}
                  </Code1>
                </div>
                
                {/* Narrow Container */}
                <div>
                  <H3 className="mb-6">Narrow Container</H3>
                  <div className="mb-4">
                    <Body1>The narrow container has a maximum width of 3xl (768px) and is centered.</Body1>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-4 mb-4`}>
                    <Container variant="narrow" className={`${backgrounds.accent} p-8 rounded-lg`}>
                      <Body1 color="onPrimary">This is a narrow container</Body1>
                    </Container>
                  </div>
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<Container variant="narrow">
  Your content here
</Container>`}
                  </Code1>
                </div>
                
                {/* Wide Container */}
                <div>
                  <H3 className="mb-6">Wide Container</H3>
                  <div className="mb-4">
                    <Body1>The wide container has a maximum width of 7xl (1280px) and is centered.</Body1>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-4 mb-4`}>
                    <Container variant="wide" className={`${backgrounds.success} p-8 rounded-lg`}>
                      <Body1 color="onPrimary">This is a wide container</Body1>
                    </Container>
                  </div>
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<Container variant="wide">
  Your content here
</Container>`}
                  </Code1>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Typography Components */}
        {activeTab === 'Typography' && (
          <section>
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
              <H2 className={`mb-8 pb-4 border-b ${borders.surface}`} color="primary">Typography Components</H2>
              
              <div className="space-y-12">
                {/* Headings */}
                <div>
                  <H3 className="mb-6">Headings</H3>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 space-y-6 mb-4`}>
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
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<H1>Heading 1</H1>
<H2>Heading 2</H2>
<H3>Heading 3</H3>
<H4>Heading 4</H4>`}
                  </Code1>
                </div>
                
                {/* Body Text */}
                <div>
                  <H3 className="mb-6">Body Text</H3>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 space-y-6 mb-4`}>
                    <div>
                      <Body1>Body 1: Main paragraph text used for most content.</Body1>
                      <Code1 className="mt-2 text-xs">{typography.body1}</Code1>
                    </div>
                    <div>
                      <Body2>Body 2: Secondary text used for supporting content and descriptions.</Body2>
                      <Code1 className="mt-2 text-xs">{typography.body2}</Code1>
                    </div>
                    <div>
                      <Body3>Body 3: Smallest text used for captions, footnotes, and fine print.</Body3>
                      <Code1 className="mt-2 text-xs">{typography.body3}</Code1>
                    </div>
                  </div>
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<Body1>Body 1: Main paragraph text used for most content.</Body1>
<Body2>Body 2: Secondary text used for supporting content and descriptions.</Body2>
<Body3>Body 3: Smallest text used for captions, footnotes, and fine print.</Body3>`}
                  </Code1>
                </div>
                
                {/* Text Colors */}
                <div>
                  <H3 className="mb-6">Text Colors</H3>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 space-y-4 mb-4`}>
                    <Body1 color="primary">Primary Text Color</Body1>
                    <Body1 color="secondary">Secondary Text Color</Body1>
                    <Body1 color="success">Success Text Color</Body1>
                    <Body1 color="warning">Warning Text Color</Body1>
                    <Body1 color="danger">Danger Text Color</Body1>
                    <Body1 color="accent">Accent Text Color</Body1>
                    <Body1 color="onSurface">On Surface Text Color</Body1>
                    <Body1 color="onSurfaceMuted">On Surface Muted Text Color</Body1>
                  </div>
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<Body1 color="primary">Primary Text Color</Body1>
<Body1 color="secondary">Secondary Text Color</Body1>
<Body1 color="success">Success Text Color</Body1>
<Body1 color="warning">Warning Text Color</Body1>
<Body1 color="danger">Danger Text Color</Body1>
<Body1 color="accent">Accent Text Color</Body1>
<Body1 color="onSurface">On Surface Text Color</Body1>
<Body1 color="onSurfaceMuted">On Surface Muted Text Color</Body1>`}
                  </Code1>
                </div>
                
                {/* Labels and Code */}
                <div>
                  <H3 className="mb-6">Labels and Code</H3>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 space-y-6 mb-4`}>
                    <div>
                      <Label1>LABEL 1: USED FOR FORM LABELS AND SMALL HEADERS</Label1>
                      <Code1 className="mt-2 text-xs">{typography.label1}</Code1>
                    </div>
                    <div>
                      <Label2>LABEL 2: SMALLER VERSION FOR SECONDARY LABELS</Label2>
                      <Code1 className="mt-2 text-xs">{typography.label2}</Code1>
                    </div>
                    <div>
                      <Code1 className="mt-2 text-xs">{typography.code1}</Code1>
                    </div>
                  </div>
                  <Code1 className="block p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
{`<Label1>LABEL 1: USED FOR FORM LABELS AND SMALL HEADERS</Label1>
<Label2>LABEL 2: SMALLER VERSION FOR SECONDARY LABELS</Label2>`}
                  </Code1>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Button Components */}
        {activeTab === 'Button' && (
          <section>
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
              <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Button Components</H2>
              
              <div className="space-y-12">
                {/* Button Variants */}
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Button Variants</H3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 mb-4`}>
                    <Code1 className="block">
{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
                    </Code1>
                  </div>
                </div>
                
                {/* Button Sizes */}
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Button Sizes</H3>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Button size="xs">Extra Small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium (Default)</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 mb-4`}>
                    <Code1 className="block">
{`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (Default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
                    </Code1>
                  </div>
                </div>
                
                {/* Button Widths */}
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Button Widths</H3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <Button width="auto">Auto Width</Button>
                    </div>
                    <div>
                      <Button width="fixed">Fixed Width (240px)</Button>
                    </div>
                    <div>
                      <Button width="full">Full Width</Button>
                    </div>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 mb-4`}>
                    <Code1 className="block">
{`<Button width="auto">Auto Width</Button>
<Button width="fixed">Fixed Width (240px)</Button>
<Button width="full">Full Width</Button>`}
                    </Code1>
                  </div>
                </div>
                
                {/* Button States */}
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Button States</H3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button loading disabled>Loading & Disabled</Button>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 mb-4`}>
                    <Code1 className="block">
{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button loading disabled>Loading & Disabled</Button>`}
                    </Code1>
                  </div>
                </div>
                
                {/* Button with Icons */}
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Button with Icons</H3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button 
                      icon={<span className="text-lg">👋</span>} 
                      iconPosition="left"
                    >
                      Left Icon
                    </Button>
                    <Button 
                      icon={<span className="text-lg">👉</span>} 
                      iconPosition="right"
                    >
                      Right Icon
                    </Button>
                    <Button 
                      variant="outline"
                      icon={<span className="text-lg">🔄</span>} 
                      loading
                    >
                      Loading with Icon
                    </Button>
                  </div>
                  <div className={`${backgrounds.surface} border ${borders.surface} rounded-lg p-6 mb-4`}>
                    <Code1 className="block">
{`<Button 
  icon={<span className="text-lg">👋</span>} 
  iconPosition="left"
>
  Left Icon
</Button>

<Button 
  icon={<span className="text-lg">👉</span>} 
  iconPosition="right"
>
  Right Icon
</Button>

<Button 
  variant="outline"
  icon={<span className="text-lg">🔄</span>} 
  loading
>
  Loading with Icon
</Button>`}
                    </Code1>
                  </div>
                </div>
                
                {/* Button Usage Examples */}
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Usage Examples</H3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <Card.Header>
                        <H4 className={textColors.primary}>Form Actions</H4>
                      </Card.Header>
                      <Card.Body>
                        <div className="space-y-4">
                          <div>
                            <label className="block mb-2">Email</label>
                            <input type="email" className="w-full p-2 border rounded" placeholder="email@example.com" />
                          </div>
                          <div>
                            <label className="block mb-2">Password</label>
                            <input type="password" className="w-full p-2 border rounded" placeholder="••••••••" />
                          </div>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost">Cancel</Button>
                          <Button>Submit</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                    
                    <Card>
                      <Card.Header>
                        <H4 className={textColors.primary}>Action Buttons</H4>
                      </Card.Header>
                      <Card.Body>
                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <Button variant="success" size="sm">Approve</Button>
                            <Button variant="danger" size="sm">Reject</Button>
                          </div>
                          <div>
                            <Button variant="primary" width="full">Continue to Payment</Button>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" icon={<span>📋</span>}>Copy</Button>
                            <Button variant="outline" size="sm" icon={<span>🔗</span>}>Share</Button>
                            <Button variant="outline" size="sm" icon={<span>⬇️</span>}>Download</Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Card Components */}
        {activeTab === 'Card' && (
          <section className="mb-20">
            <div className={`${backgrounds.surfaceAlt} rounded-xl p-8 ${shadows.elevation1} border ${borders.surface}`}>
              <H2 className={`${textColors.primary} mb-8 pb-4 border-b ${borders.surface}`}>Card Components</H2>
              
              <div className="space-y-8">
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Card Variants</H3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Default Surface Card */}
                    <Card>
                      <Card.Header>
                        <H4 className={textColors.primary}>Surface Card (Default)</H4>
                        <Body2 className={textColors.onSurfaceMuted}>Default card with subtle shadow and border</Body2>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          This is the default card variant with a white background in light mode
                          and a dark background in dark mode. It has a subtle shadow and border.
                        </Body1>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-end">
                          <Button variant="primary">Action</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                    
                    {/* Surface Alt Card */}
                    <Card variant="surfaceAlt">
                      <Card.Header>
                        <H4 className={textColors.primary}>Surface Alt Card</H4>
                        <Body2 className={textColors.onSurfaceMuted}>Alternative surface with subtle border</Body2>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          This card uses the alternative surface color, which is a light gray in light mode
                          and a slightly lighter shade in dark mode. Good for secondary content.
                        </Body1>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-end">
                          <Button variant="primary">Action</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                    
                    {/* Elevated Card */}
                    <Card variant="elevated">
                      <Card.Header>
                        <H4 className={textColors.primary}>Elevated Card</H4>
                        <Body2 className={textColors.onSurfaceMuted}>More pronounced shadow for emphasis</Body2>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          The elevated card has a more pronounced shadow to make it stand out.
                          Use this for important content or interactive elements that need emphasis.
                        </Body1>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-end">
                          <Button variant="primary">Action</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                    
                    {/* Outlined Card */}
                    <Card variant="outlined">
                      <Card.Header>
                        <H4 className={textColors.primary}>Outlined Card</H4>
                        <Body2 className={textColors.onSurfaceMuted}>More visible border without shadow</Body2>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          The outlined card has a more visible border but no shadow.
                          This is useful for content that needs to be visually separated but not elevated.
                        </Body1>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-end">
                          <Button variant="primary">Action</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Additional Card Variants</H3>
                  <div className="grid grid-cols-1 gap-6">
                    {/* Flat Card */}
                    <Card variant="flat">
                      <Card.Header>
                        <H4 className={textColors.primary}>Flat Card</H4>
                        <Body2 className={textColors.onSurfaceMuted}>No border or shadow, just background color</Body2>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          The flat card has no border or shadow, just the background color.
                          This is useful for simple content grouping without visual separation.
                          It can be used in situations where you want a cleaner, more minimal look.
                        </Body1>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost">Cancel</Button>
                          <Button variant="primary">Action</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Card Padding Options</H3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Small Padding */}
                    <Card padding="small">
                      <Card.Header>
                        <H4 className={textColors.primary}>Small Padding</H4>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          This card uses the small padding option (p-4).
                        </Body1>
                      </Card.Body>
                    </Card>
                    
                    {/* Medium Padding (Default) */}
                    <Card>
                      <Card.Header>
                        <H4 className={textColors.primary}>Medium Padding</H4>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          This card uses the medium padding option (p-6), which is the default.
                        </Body1>
                      </Card.Body>
                    </Card>
                    
                    {/* Large Padding */}
                    <Card padding="large">
                      <Card.Header>
                        <H4 className={textColors.primary}>Large Padding</H4>
                      </Card.Header>
                      <Card.Body>
                        <Body1>
                          This card uses the large padding option (p-8).
                        </Body1>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <H3 className={`${textColors.primary} mb-6`}>Card Usage Examples</H3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Content Card Example */}
                    <Card>
                      <Card.Header>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${backgrounds.primary} flex items-center justify-center ${textColors.onPrimary}`}>
                            TS
                          </div>
                          <div>
                            <H4 className={textColors.primary}>Content Card</H4>
                            <Body2 className={textColors.onSurfaceMuted}>Example of a content card</Body2>
                          </div>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Body1 className="mb-4">
                          Cards can be used to display various types of content, from articles and blog posts to product information and user profiles.
                        </Body1>
                        <div className={`${backgrounds.surfaceAlt} p-4 rounded-lg mb-4`}>
                          <Code1>
                            {`<Card>
    <Card.Header>...</Card.Header>
    <Card.Body>...</Card.Body>
    <Card.Footer>...</Card.Footer>
  </Card>`}
                          </Code1>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <div className="flex justify-between items-center">
                          <Body2 className={textColors.onSurfaceMuted}>Last updated: Today</Body2>
                          <Button variant="primary">Read More</Button>
                        </div>
                      </Card.Footer>
                    </Card>
                    
                    {/* Interactive Card Example */}
                    <Card variant="elevated" className="transition-all duration-300 hover:shadow-lg">
                      <Card.Body className="p-0">
                        <div className={`${backgrounds.primaryGradient} h-40 flex items-center justify-center ${textColors.onPrimary}`}>
                          <H3>Interactive Card</H3>
                        </div>
                        <div className="p-6">
                          <H4 className={`${textColors.primary} mb-2`}>Interactive Elements</H4>
                          <Body1 className="mb-4">
                            Cards can contain interactive elements like buttons, forms, or be entirely clickable for navigation.
                          </Body1>
                          <div className="flex gap-2">
                            <Button variant="ghost">Cancel</Button>
                            <Button variant="primary">Continue</Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}

// Tab Button Component - Restore to original tab style
function TabButton({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      className={`px-4 py-2 font-medium text-sm border-b-2 ${
        active 
          ? `${textColors.primary} border-cyan-500` 
          : `${textColors.onSurfaceMuted} border-transparent hover:${textColors.primary} hover:border-cyan-300`
      } transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BasicComponentsDemo; 