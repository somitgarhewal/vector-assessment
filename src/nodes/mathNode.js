// mathNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const operation = data?.operation || 'Add';
  return (
    <BaseNode
      title="Math"
      fields={[{
        label: 'Operation',
        type: 'select',
        value: operation,
        options: ['Add', 'Subtract', 'Multiply', 'Divide'],
        onChange: () => {},
      }]}
      handles={[{
        type: 'target',
        position: Position.Left,
        id: `${id}-inputA`,
      }, {
        type: 'target',
        position: Position.Left,
        id: `${id}-inputB`,
      }, {
        type: 'source',
        position: Position.Right,
        id: `${id}-result`,
      }]}
    />
  );
};