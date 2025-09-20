// booleanNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const BooleanNode = ({ id, data }) => {
  const value = data?.value || false;
  return (
    <BaseNode
      title="Boolean"
      fields={[{
        label: 'Value',
        type: 'select',
        value: value ? 'True' : 'False',
        options: ['True', 'False'],
        onChange: () => {},
      }]}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-bool`,
      }]}
    />
  );
};