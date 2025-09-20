// outputNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const currName = data?.outputName || id.replace('customOutput-', 'output_');
  const outputType = data.outputType || 'Text';

  return (
    <BaseNode
      title="Output"
      fields={[
        {
          label: 'Name',
          type: 'text',
          value: currName,
          onChange: () => { },
        },
        {
          label: 'Name',
          type: 'select',
          value: outputType,
          options: ['Text', 'File'],
          onChange: () => { },
        },
      ]}
      handles={[{
        type: 'target',
        position: Position.Left,
        id: `${id}-value`,
      }]}
    />
  );

}
