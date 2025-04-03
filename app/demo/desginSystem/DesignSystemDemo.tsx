import React from 'react';
import { Typography } from '../../components/basic/Typography';
import { 
  Home, Search, Settings, Bell, Heart, User, Edit, Trash2, 
  Plus, Menu, X, Check, Info, AlertCircle, AlertTriangle, 
  HelpCircle, ArrowRight, ArrowLeft, Download, Upload
} from 'lucide-react';

// Basic styling for sections - replace with your design system's styling/components
const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
  padding: '20px',
  border: '1px solid #eee',
  borderRadius: '8px',
  background: '#fff',
};

const headingStyle: React.CSSProperties = {
  borderBottom: '2px solid #ccc',
  paddingBottom: '10px',
  marginBottom: '20px',
  marginTop: '0',
};

// Color swatch component
const ColorSwatch: React.FC<{ color: string; name: string; hex: string }> = ({ color, name, hex }) => (
  <div className="flex mb-2.5 items-center">
    <div 
      className="w-15 h-15 rounded border border-gray-300 mr-4"
      style={{ backgroundColor: color }} 
    />
    <div>
      <Typography variant="subtitle1" className="font-bold">{name}</Typography>
      <Typography variant="caption" className="text-gray-600">{hex}</Typography>
    </div>
  </div>
);

// Spacing example component
const SpacingExample: React.FC<{ size: number; name: string }> = ({ size, name }) => (
  <div className="flex items-center mb-4">
    <div className="w-24">{name}</div>
    <div 
      className="h-5 bg-gray-300 mr-2.5"
      style={{ width: `${size}px` }} 
    />
    <div>{size}px</div>
  </div>
);

// Typography example component
const TypographyExample: React.FC<{ 
  element: string; 
  style: React.CSSProperties; 
  description: string 
}> = ({ element, style, description }) => (
  <div className="mb-5">
    <div 
      className="mb-1.5"
      style={style}
    >
      {element} - {description}
    </div>
    <Typography variant="caption" className="text-gray-600">
      {Object.entries(style).map(([key, value]) => (
        <span key={key} className="mr-4">
          {key}: {value}
        </span>
      ))}
    </Typography>
    <hr className="border-gray-200 my-2.5" />
  </div>
);

// Add this new component for displaying icons with labels
const IconDisplay: React.FC<{ 
  icon: React.ReactNode; 
  name: string;
  size?: number;
}> = ({ icon, name, size = 24 }) => (
  <div className="flex flex-col items-center p-2.5 border border-gray-200 rounded">
    <div className="mb-2 flex items-center justify-center" style={{ height: `${size}px` }}>
      {icon}
    </div>
    <Typography variant="caption">{name}</Typography>
  </div>
);

const DesignSystemDemoPage: React.FC = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <Typography variant="h1" className="font-bold">Design System Overview</Typography>
      <Typography variant="body1" className="mt-2">Welcome to the project's design system documentation. This guide outlines the visual language and components used throughout the application to ensure consistency and cohesion.</Typography>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white mt-6">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Principles</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-4 border border-gray-200 rounded">
            <Typography variant="h3" className="font-semibold">Consistency</Typography>
            <Typography variant="body2">Uniform patterns and interactions to reduce cognitive load and improve usability.</Typography>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <Typography variant="h3" className="font-semibold">Accessibility</Typography>
            <Typography variant="body2">Inclusive design that works for all users, regardless of abilities or context.</Typography>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <Typography variant="h3" className="font-semibold">Efficiency</Typography>
            <Typography variant="body2">Streamlined interfaces that help users accomplish tasks with minimal effort.</Typography>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <Typography variant="h3" className="font-semibold">Flexibility</Typography>
            <Typography variant="body2">Components that adapt to different contexts while maintaining visual coherence.</Typography>
          </div>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Typography</Typography>
        <Typography variant="body1">Our typography system uses a clear hierarchy to guide users through the interface.</Typography>
        
        <div className="mt-5">
          <TypographyExample 
            element="h1" 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif', 
              fontSize: '32px', 
              fontWeight: 700, 
              lineHeight: 1.2 
            }} 
            description="Page Titles" 
          />
          
          <TypographyExample 
            element="h2" 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif', 
              fontSize: '24px', 
              fontWeight: 600, 
              lineHeight: 1.3 
            }} 
            description="Section Headers" 
          />
          
          <TypographyExample 
            element="h3" 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif', 
              fontSize: '20px', 
              fontWeight: 600, 
              lineHeight: 1.4 
            }} 
            description="Subsection Headers" 
          />
          
          <TypographyExample 
            element="p" 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif', 
              fontSize: '16px', 
              fontWeight: 400, 
              lineHeight: 1.5 
            }} 
            description="Body Text" 
          />
          
          <TypographyExample 
            element="small" 
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif', 
              fontSize: '14px', 
              fontWeight: 400, 
              lineHeight: 1.5 
            }} 
            description="Caption Text" 
          />
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Color Palette</Typography>
        <Typography variant="body1">Our color system is designed to communicate hierarchy, state, and brand identity.</Typography>
        
        <div className="mt-5">
          <Typography variant="h3" className="font-semibold">Primary Colors</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <ColorSwatch color="#1a73e8" name="Primary" hex="#1a73e8" />
            <ColorSwatch color="#0d47a1" name="Primary Dark" hex="#0d47a1" />
            <ColorSwatch color="#e8f0fe" name="Primary Light" hex="#e8f0fe" />
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Secondary Colors</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <ColorSwatch color="#34a853" name="Success" hex="#34a853" />
            <ColorSwatch color="#fbbc04" name="Warning" hex="#fbbc04" />
            <ColorSwatch color="#ea4335" name="Error" hex="#ea4335" />
            <ColorSwatch color="#9c27b0" name="Accent" hex="#9c27b0" />
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Neutral Colors</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <ColorSwatch color="#202124" name="Text Primary" hex="#202124" />
            <ColorSwatch color="#5f6368" name="Text Secondary" hex="#5f6368" />
            <ColorSwatch color="#dadce0" name="Border" hex="#dadce0" />
            <ColorSwatch color="#f8f9fa" name="Background" hex="#f8f9fa" />
          </div>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Spacing & Layout</Typography>
        <Typography variant="body1">Consistent spacing creates rhythm and hierarchy in the interface.</Typography>
        
        <div className="mt-5">
          <Typography variant="h3" className="font-semibold">Spacing Scale</Typography>
          <div className="mt-4">
            <SpacingExample size={4} name="xs" />
            <SpacingExample size={8} name="sm" />
            <SpacingExample size={16} name="md" />
            <SpacingExample size={24} name="lg" />
            <SpacingExample size={32} name="xl" />
            <SpacingExample size={48} name="2xl" />
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Grid System</Typography>
          <div className="grid grid-cols-12 gap-2 mt-4 border border-dashed border-gray-300 p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-300 h-12 flex items-center justify-center text-xs"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <Typography variant="caption" className="mt-2.5">12-column grid for responsive layouts</Typography>
          
          <Typography variant="h3" className="font-semibold mt-6">Container Widths</Typography>
          <div className="mt-4">
            <div className="mb-4">
              <div className="bg-gray-300 p-2.5 max-w-sm mx-auto text-center">
                Small (max-width: 576px)
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-gray-300 p-2.5 max-w-md mx-auto text-center">
                Medium (max-width: 768px)
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-gray-300 p-2.5 max-w-lg mx-auto text-center">
                Large (max-width: 992px)
              </div>
            </div>
            <div>
              <div className="bg-gray-300 p-2.5 max-w-xl mx-auto text-center">
                Extra Large (max-width: 1200px)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Responsive Design</Typography>
        <Typography variant="body1">Our design system follows a mobile-first approach, ensuring optimal experiences across all device sizes.</Typography>
        
        <div className="mt-5">
          <Typography variant="h3" className="font-semibold">Breakpoints</Typography>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Size</th>
                  <th className="border border-gray-300 p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">xs</td>
                  <td className="border border-gray-300 p-2">&lt; 30rem (480px)</td>
                  <td className="border border-gray-300 p-2">Extra small devices (phones)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">sm</td>
                  <td className="border border-gray-300 p-2">≥ 40rem (640px)</td>
                  <td className="border border-gray-300 p-2">Small devices (large phones, small tablets)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">md</td>
                  <td className="border border-gray-300 p-2">≥ 48rem (768px)</td>
                  <td className="border border-gray-300 p-2">Medium devices (tablets)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">lg</td>
                  <td className="border border-gray-300 p-2">≥ 64rem (1024px)</td>
                  <td className="border border-gray-300 p-2">Large devices (desktops)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">xl</td>
                  <td className="border border-gray-300 p-2">≥ 80rem (1280px)</td>
                  <td className="border border-gray-300 p-2">Extra large devices (large desktops)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">2xl</td>
                  <td className="border border-gray-300 p-2">≥ 96rem (1536px)</td>
                  <td className="border border-gray-300 p-2">Extra extra large devices (wide screens)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Mobile-First Grid</Typography>
          <div className="mt-4 border border-dashed border-gray-300 p-4">
            <div className="grid gap-4">
              <div className="bg-blue-100 p-4 rounded">
                <Typography variant="subtitle1" className="font-semibold">4-Column Grid (Mobile)</Typography>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-blue-200 h-10 flex items-center justify-center text-xs rounded">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded hide-xs show-sm">
                <Typography variant="subtitle1" className="font-semibold">8-Column Grid (Tablet)</Typography>
                <div className="grid grid-cols-8 gap-2 mt-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-green-200 h-10 flex items-center justify-center text-xs rounded">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-purple-100 p-4 rounded hide-sm show-md">
                <Typography variant="subtitle1" className="font-semibold">12-Column Grid (Desktop)</Typography>
                <div className="grid grid-cols-12 gap-2 mt-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-purple-200 h-10 flex items-center justify-center text-xs rounded">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Typography variant="caption" className="block mt-4">
              Note: This demo shows all grids for illustration. In practice, the grid adapts automatically based on screen size.
            </Typography>
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Responsive Containers</Typography>
          <div className="mt-4">
            <div className="container bg-gray-200 p-4 mb-4 rounded">
              <Typography variant="body2" className="text-center">
                This container adapts to screen size
              </Typography>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Breakpoint</th>
                    <th className="border border-gray-300 p-2 text-left">Container Max Width</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Default (xs)</td>
                    <td className="border border-gray-300 p-2">100%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">sm (≥ 640px)</td>
                    <td className="border border-gray-300 p-2">30rem (480px)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">md (≥ 768px)</td>
                    <td className="border border-gray-300 p-2">45rem (720px)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">lg (≥ 1024px)</td>
                    <td className="border border-gray-300 p-2">60rem (960px)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">xl (≥ 1280px)</td>
                    <td className="border border-gray-300 p-2">70rem (1120px)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">2xl (≥ 1536px)</td>
                    <td className="border border-gray-300 p-2">80rem (1280px)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Viewport Visibility Utilities</Typography>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded">
              <Typography variant="subtitle1" className="font-semibold">Hide Classes</Typography>
              <Typography variant="body2" className="mt-2">
                Use <code className="bg-gray-100 px-1 rounded">.hide-{'{breakpoint}'}</code> to hide elements at specific breakpoints.
              </Typography>
              <div className="mt-4">
                <div className="bg-red-100 p-2 rounded mb-2">
                  <Typography variant="body2" className="hide-md">This text is hidden on medium screens and larger</Typography>
                  <Typography variant="body2" className="hide-xs show-md">This text appears only on medium screens and larger</Typography>
                </div>
                <div className="bg-blue-100 p-2 rounded">
                  <Typography variant="body2" className="hide-lg">This text is hidden on large screens and larger</Typography>
                  <Typography variant="body2" className="hide-xs show-lg">This text appears only on large screens and larger</Typography>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-300 p-4 rounded">
              <Typography variant="subtitle1" className="font-semibold">Show Classes</Typography>
              <Typography variant="body2" className="mt-2">
                Use <code className="bg-gray-100 px-1 rounded">.show-{'{breakpoint}'}</code> to show elements only at specific breakpoints.
              </Typography>
              <div className="mt-4">
                <div className="bg-green-100 p-2 rounded mb-2">
                  <Typography variant="body2" className="show-xs hide-sm">This text shows only on extra small screens</Typography>
                  <Typography variant="body2" className="show-sm hide-md">This text shows only on small screens</Typography>
                  <Typography variant="body2" className="show-md hide-lg">This text shows only on medium screens</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Components</Typography>
        <Typography variant="body1">Reusable UI elements that form the building blocks of our interfaces.</Typography>
        
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-gray-200 rounded-lg p-4">
            <Typography variant="h3" className="font-semibold">Buttons</Typography>
            <div className="flex flex-col gap-2.5 mt-2.5">
              <button className="bg-blue-600 text-white border-none py-2 px-4 rounded font-medium cursor-pointer">
                Primary Button
              </button>
              <button className="bg-transparent text-blue-600 border border-blue-600 py-2 px-4 rounded font-medium cursor-pointer">
                Secondary Button
              </button>
              <button className="bg-transparent text-gray-600 border-none py-2 px-4 rounded font-medium cursor-pointer">
                Text Button
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <Typography variant="h3" className="font-semibold">Form Elements</Typography>
            <div className="flex flex-col gap-4 mt-2.5">
              <div>
                <Typography variant="caption" component="label" className="block mb-1">Text Input</Typography>
                <input 
                  type="text" 
                  placeholder="Enter text" 
                  className="w-full p-2 border border-gray-300 rounded" 
                />
              </div>
              <div>
                <Typography variant="caption" component="label" className="block mb-1">Dropdown</Typography>
                <select className="w-full p-2 border border-gray-300 rounded bg-white">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="checkbox" className="mr-2" />
                <Typography variant="caption" component="label" htmlFor="checkbox">Checkbox</Typography>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <Typography variant="h3" className="font-semibold">Cards</Typography>
            <div className="border border-gray-300 rounded-lg overflow-hidden mt-2.5">
              <div className="h-30 bg-blue-100 flex items-center justify-center">
                Card Image
              </div>
              <div className="p-4">
                <Typography variant="h4" className="m-0 mb-2 font-semibold">Card Title</Typography>
                <Typography variant="body2" className="m-0 mb-4">Card description with supporting text.</Typography>
                <button className="bg-transparent text-blue-600 border-none p-0 font-medium cursor-pointer text-sm">
                  Action
                </button>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <Typography variant="h3" className="font-semibold">Alerts</Typography>
            <div className="flex flex-col gap-2.5 mt-2.5">
              <div className="bg-blue-50 border border-blue-100 rounded p-2.5 px-4 text-blue-600">
                Info alert message
              </div>
              <div className="bg-green-50 border border-green-100 rounded p-2.5 px-4 text-green-600">
                Success alert message
              </div>
              <div className="bg-yellow-50 border border-yellow-100 rounded p-2.5 px-4 text-yellow-700">
                Warning alert message
              </div>
              <div className="bg-red-50 border border-red-100 rounded p-2.5 px-4 text-red-600">
                Error alert message
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <Typography variant="body1">For interactive examples and more components, visit the <a href="/basic-components" className="text-blue-600 no-underline">Basic Components Demo</a>.</Typography>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Iconography</Typography>
        <Typography variant="body1">Icons provide visual cues and enhance usability when used consistently.</Typography>
        
        <div className="mt-5">
          <Typography variant="h3" className="font-semibold">Icon Guidelines</Typography>
          <ul className="list-disc pl-5">
            <li>Use icons that are simple and easily recognizable</li>
            <li>Maintain consistent sizing (16px, 24px, 32px)</li>
            <li>Ensure sufficient contrast with backgrounds</li>
            <li>Include text labels for important actions</li>
          </ul>
          
          <Typography variant="h3" className="font-semibold mt-6">Common Icons</Typography>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-4 mt-4">
            <IconDisplay icon={<Home size={24} />} name="home" />
            <IconDisplay icon={<Search size={24} />} name="search" />
            <IconDisplay icon={<Settings size={24} />} name="settings" />
            <IconDisplay icon={<Bell size={24} />} name="notifications" />
            <IconDisplay icon={<Heart size={24} />} name="favorite" />
            <IconDisplay icon={<User size={24} />} name="person" />
            <IconDisplay icon={<Edit size={24} />} name="edit" />
            <IconDisplay icon={<Trash2 size={24} />} name="delete" />
            <IconDisplay icon={<Plus size={24} />} name="add" />
            <IconDisplay icon={<Menu size={24} />} name="menu" />
            <IconDisplay icon={<X size={24} />} name="close" />
            <IconDisplay icon={<Check size={24} />} name="check" />
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Icon Sizes</Typography>
          <div className="flex flex-wrap gap-6 mt-4 items-end">
            <IconDisplay icon={<Settings size={16} />} name="Small (16px)" size={16} />
            <IconDisplay icon={<Settings size={24} />} name="Medium (24px)" size={24} />
            <IconDisplay icon={<Settings size={32} />} name="Large (32px)" size={32} />
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Contextual Icons</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <div className="p-3 bg-blue-50 rounded flex items-center">
              <Info size={20} className="text-blue-600 mr-2" />
              <Typography variant="body2">Information message</Typography>
            </div>
            <div className="p-3 bg-green-50 rounded flex items-center">
              <Check size={20} className="text-green-600 mr-2" />
              <Typography variant="body2">Success message</Typography>
            </div>
            <div className="p-3 bg-yellow-50 rounded flex items-center">
              <AlertTriangle size={20} className="text-yellow-600 mr-2" />
              <Typography variant="body2">Warning message</Typography>
            </div>
            <div className="p-3 bg-red-50 rounded flex items-center">
              <AlertCircle size={20} className="text-red-600 mr-2" />
              <Typography variant="body2">Error message</Typography>
            </div>
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Interactive Icons</Typography>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer interactive-icon">
              <ArrowLeft size={20} />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer interactive-icon">
              <ArrowRight size={20} />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer interactive-icon">
              <Download size={20} />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer interactive-icon">
              <Upload size={20} />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer interactive-icon">
              <HelpCircle size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Accessibility</Typography>
        <Typography variant="body1">Our design system prioritizes accessibility to ensure all users can interact with our interfaces.</Typography>
        
        <div className="mt-5">
          <Typography variant="h3" className="font-semibold">Key Principles</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            <div className="p-4 border border-gray-200 rounded">
              <Typography variant="h4" className="font-semibold">Perceivable</Typography>
              <Typography variant="body2">Information must be presentable in ways all users can perceive.</Typography>
              <ul className="text-sm list-disc pl-5">
                <li>Provide text alternatives for non-text content</li>
                <li>Create content that can be presented in different ways</li>
                <li>Make it easier for users to see and hear content</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <Typography variant="h4" className="font-semibold">Operable</Typography>
              <Typography variant="body2">Interface components must be operable by all users.</Typography>
              <ul className="text-sm list-disc pl-5">
                <li>Make all functionality available from a keyboard</li>
                <li>Give users enough time to read and use content</li>
                <li>Do not use content that causes seizures</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <Typography variant="h4" className="font-semibold">Understandable</Typography>
              <Typography variant="body2">Information and operation must be understandable.</Typography>
              <ul className="text-sm list-disc pl-5">
                <li>Make text readable and understandable</li>
                <li>Make content appear and operate in predictable ways</li>
                <li>Help users avoid and correct mistakes</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded">
              <Typography variant="h4" className="font-semibold">Robust</Typography>
              <Typography variant="body2">Content must be robust enough to work with various technologies.</Typography>
              <ul className="text-sm list-disc pl-5">
                <li>Maximize compatibility with current and future tools</li>
                <li>Use semantic HTML elements</li>
                <li>Ensure proper ARIA attributes when needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 p-5 border border-gray-200 rounded-lg bg-white">
        <Typography variant="h2" className="border-b-2 border-gray-300 pb-2.5 mb-5 mt-0 font-semibold">Voice & Tone</Typography>
        <Typography variant="body1">How we communicate with users through text is an essential part of our design system.</Typography>
        
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Typography variant="h3" className="font-semibold">Voice Attributes</Typography>
              <ul className="list-disc pl-5">
                <li><strong>Clear:</strong> Use simple, direct language</li>
                <li><strong>Helpful:</strong> Focus on solving user problems</li>
                <li><strong>Friendly:</strong> Warm but professional</li>
                <li><strong>Concise:</strong> Respect users' time and attention</li>
              </ul>
            </div>
            <div>
              <Typography variant="h3" className="font-semibold">Tone Considerations</Typography>
              <ul className="list-disc pl-5">
                <li><strong>Success messages:</strong> Positive and affirming</li>
                <li><strong>Error messages:</strong> Helpful and solution-oriented</li>
                <li><strong>Instructions:</strong> Clear and step-by-step</li>
                <li><strong>Warnings:</strong> Direct but not alarming</li>
              </ul>
            </div>
          </div>
          
          <Typography variant="h3" className="font-semibold mt-6">Examples</Typography>
          <div className="mt-4">
            <div className="mb-5 p-4 border border-gray-200 rounded">
              <Typography variant="h4" className="m-0 mb-2.5 font-semibold">Error Message</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Typography variant="subtitle2" className="text-red-600 font-bold">❌ Avoid</Typography>
                  <Typography variant="body2">"Error 404: Page not found. The requested URL was not found on this server."</Typography>
                </div>
                <div>
                  <Typography variant="subtitle2" className="text-green-600 font-bold">✅ Preferred</Typography>
                  <Typography variant="body2">"We couldn't find that page. Check the URL or head back to the homepage to find what you're looking for."</Typography>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded">
              <Typography variant="h4" className="m-0 mb-2.5 font-semibold">Form Validation</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Typography variant="subtitle2" className="text-red-600 font-bold">❌ Avoid</Typography>
                  <Typography variant="body2">"Invalid input. Password requirements not met."</Typography>
                </div>
                <div>
                  <Typography variant="subtitle2" className="text-green-600 font-bold">✅ Preferred</Typography>
                  <Typography variant="body2">"Your password needs to be at least 8 characters and include a number and a special character."</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignSystemDemoPage; 