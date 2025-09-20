// timestampNode.js
import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimestampNode = ({ id, data }) => {
  const format = data?.format || 'YYYY-MM-DD';
  return (
    <BaseNode
      title="Timestamp"
      fields={[{
        label: 'Format',
        type: 'text',
        value: format,
        onChange: () => {},
      }]}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-timestamp`,
      }]}
    />
  );
};