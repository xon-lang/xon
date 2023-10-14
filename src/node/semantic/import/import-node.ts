import { SemanticNode } from '~/analysis/semantic/semantic-node';
import { NodeType } from '~/node/node';

export interface ImportNode extends SemanticNode {
  $: NodeType.IMPORT;
}

export function declarationNode(): ImportNode {
  return {
    $: NodeType.IMPORT,
  };
}
