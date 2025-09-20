// textNode.js


import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const currText = data?.text || '{{input}}';

  return (
    <BaseNode
      title="Text"
      fields={[{
        label: 'Text',
        type: "text",
        value: currText, 
        onChange: () => { }
      }]}
      handles={[{
        type: 'source',
        position: Position.Right,
        id: `${id}-value`,
      }]}
    />
  );
}
