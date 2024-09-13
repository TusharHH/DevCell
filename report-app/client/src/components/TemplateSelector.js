import React from 'react';
import { useState } from 'react';
import '../styles/TemplateSelector.scss';

const TemplateSelector = ({ onSelectTemplate }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    onSelectTemplate(template);
  };

  return (
    <div className="template-selector">
      <h2>Select a Template</h2>
      <div className={`template ${selectedTemplate === 'template1' ? 'active' : ''}`} onClick={() => handleTemplateChange('template1')}>
        <h3>Template 1</h3>
      </div>
      <div className={`template ${selectedTemplate === 'template2' ? 'active' : ''}`} onClick={() => handleTemplateChange('template2')}>
        <h3>Template 2</h3>
      </div>
    </div>
  );
};

export default TemplateSelector;
