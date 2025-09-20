// inputNode.js


import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const inputName = data?.inputName || id.replace('customInput-', 'input_');
  const inputType = data?.inputType || 'Text';

  return (
    <BaseNode
      title="Input"
      fields={[
        {
          label: 'Name',
          type: 'text',
          value: inputName,
          onChange: () => {},
        },
        {
          label: 'Type',
          type: 'select',
          value: inputType,
          options: ['Text', 'File'],
          onChange: () => {},
        },
      ]}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-value`,
      }]}
    />
  );
};
