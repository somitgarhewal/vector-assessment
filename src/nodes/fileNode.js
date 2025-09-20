// fileNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FileNode = ({ id, data }) => {
  const fileType = data?.fileType || 'PDF';
  return (
    <BaseNode
      title="File"
      fields={[{
        label: 'File Type',
        type: 'select',
        value: fileType,
        options: ['PDF', 'DOCX', 'TXT'],
        onChange: () => {},
      }]}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-file`,
      }]}
    />
  );
};