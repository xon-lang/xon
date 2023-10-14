import { NodeType } from '~/node/node';
import { SemanticNode } from '~/node/syntactic/semantic-node';

export interface ImportNode extends SemanticNode {
  $: NodeType.IMPORT;
}

export function declarationNode(): ImportNode {
  return {
    $: NodeType.IMPORT,
  };
}
