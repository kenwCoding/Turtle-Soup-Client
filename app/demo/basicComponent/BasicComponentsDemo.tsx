import React from 'react';
import { Typography } from '../../components/basic';

// Basic styling for component demo sections - replace with your design system
const componentSectionStyle: React.CSSProperties = {
  marginBottom: '30px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  background: '#fff',
};

const componentHeadingStyle: React.CSSProperties = {
  marginTop: '0',
  marginBottom: '15px',
  borderBottom: '1px solid #eee',
  paddingBottom: '8px',
};

const BasicComponentsDemoPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', background: '#f9f9f9', minHeight: '100vh' }}>
      <h1>Basic Components Demo</h1>
      <p>This page showcases the implementation and usage of fundamental UI components.</p>

      <section style={componentSectionStyle}>
        <h2 style={componentHeadingStyle}>Buttons</h2>
        <p>Demonstrations of different button types, states, and sizes.</p>
        {/* Button examples will go here */}
        {/* e.g., <Button variant="primary">Primary</Button> */}
        <p><em>(Component examples coming soon)</em></p>
      </section>

      <section style={componentSectionStyle}>
        <h2 style={componentHeadingStyle}>Cards</h2>
        <p>Examples of card layouts and variations.</p>
        {/* Card examples will go here */}
        {/* e.g., <Card title="Example Card">Content...</Card> */}
        <p><em>(Component examples coming soon)</em></p>
      </section>

      <section style={componentSectionStyle}>
        <h2 style={componentHeadingStyle}>Input Fields</h2>
        <p>Text inputs, number inputs, text areas, and their states.</p>
        {/* Input field examples will go here */}
        {/* e.g., <Input placeholder="Enter text..." /> */}
        <p><em>(Component examples coming soon)</em></p>
      </section>

      <section style={componentSectionStyle}>
        <h2 style={componentHeadingStyle}>Select Dropdowns</h2>
        <p>Single and multi-select dropdown examples.</p>
        {/* Select dropdown examples will go here */}
        {/* e.g., <Select options={[...]} /> */}
        <p><em>(Component examples coming soon)</em></p>
      </section>

      <section style={componentSectionStyle}>
        <h2>Typography</h2>
        <div className="demo-row">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
        </div>
        
        <div className="demo-row">
          <Typography variant="h6">Subtitle 1</Typography>
          <Typography variant="body1" className="font-medium">Subtitle 2</Typography>
        </div>
        
        <div className="demo-row">
          <Typography variant="body1">Body 1 - This is a paragraph with the body1 style. It's used for the main content of your application.</Typography>
          <Typography variant="body2">Body 2 - This is a paragraph with the body2 style. It's slightly smaller than body1.</Typography>
        </div>
        
        <div className="demo-row">
          <Typography variant="caption">Caption - Smaller text like captions</Typography>
          <Typography variant="body2" className="uppercase tracking-wider">OVERLINE - TYPICALLY USED FOR LABELS</Typography>
        </div>
        
        <h3>Typography Colors</h3>
        <div className="demo-row">
          <Typography color="primary">Primary Color</Typography>
          <Typography color="secondary">Secondary Color</Typography>
          <Typography color="error">Error Color</Typography>
          <Typography color="warning">Warning Color</Typography>
          <Typography color="info">Info Color</Typography>
          <Typography color="success">Success Color</Typography>
        </div>
        
        <h3>Custom Component</h3>
        <div className="demo-row">
          <Typography variant="h4" style={{ fontStyle: 'italic' }}>
            This is an H4 with italic style
          </Typography>
        </div>
      </section>

      {/* Add more component sections as needed (e.g., Checkboxes, Radio Buttons, Modals, Tooltips) */}
    </div>
  );
}

export default BasicComponentsDemoPage; 