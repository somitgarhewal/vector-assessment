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
    <div className="w-64 min-h-32 bg-black rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col gap-2">
      {handles.filter(h => h.type === 'target').map((h, i) => (
        <Handle key={i} {...h} />
      ))}
      <div className="text-lg font-semibold text-gray-100 mb-2 text-center">{title}</div>
      <div className="flex flex-col gap-2">
        {fields.map((field, i) => (
          <label key={i} className="flex flex-col text-sm text-gray-700">
            <span className="mb-1 font-medium text-gray-100">{field.label}:</span>
            {field.type === 'select' ? (
              <select
                value={fieldValues[field.label]}
                onChange={e => handleFieldChange(field.label, e)}
                className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              >
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={fieldValues[field.label]}
                onChange={e => handleFieldChange(field.label, e)}
                className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              />
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
