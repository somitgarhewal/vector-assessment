// BaseNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

/**
 * Generic node abstraction for React Flow nodes.
 * @param {string} title - Node title
 * @param {Array} fields - Array of field definitions: { label, type, value, onChange, options }
 * @param {Array} handles - Array of handle definitions: { type, position, id, style }
 * @param {React.ReactNode} children - Custom content
 */
export const BaseNode = ({ title, fields = [], handles = [], children }) => {
  // Local state for each field
  const [fieldValues, setFieldValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.label] = field.value;
      return acc;
    }, {})
  );

  const handleFieldChange = (label, e) => {
    const value = e.target.value;
    setFieldValues((prev) => ({ ...prev, [label]: value }));
    const field = fields.find(f => f.label === label);
    if (field && field.onChange) field.onChange(value);
  };

  return (
    <div style={{ width: 200, minHeight: 80, border: '1px solid black', padding: 8 }}>
      {handles.filter(h => h.type === 'target').map((h, i) => (
        <Handle key={i} {...h} />
      ))}
      <div><span>{title}</span></div>
      <div>
        {fields.map((field, i) => (
          <label key={i} style={{ display: 'block', marginBottom: 4 }}>
            {field.label}:
            {field.type === 'select' ? (
              <select value={fieldValues[field.label]} onChange={e => handleFieldChange(field.label, e)}>
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input type={field.type} value={fieldValues[field.label]} onChange={e => handleFieldChange(field.label, e)} />
            )}
          </label>
        ))}
      </div>
      {children}
      {handles.filter(h => h.type === 'source').map((h, i) => (
        <Handle key={i} {...h} />
      ))}
    </div>
  );
};
