// colorNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ColorNode = ({ id, data }) => {
  const color = data?.color || '#ff0000';
  return (
    <BaseNode
      title="Color"
      fields={[{
        label: 'Color',
        type: 'text',
        value: color,
        onChange: () => {},
      }]}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-color`,
      }]}
    />
  );
};