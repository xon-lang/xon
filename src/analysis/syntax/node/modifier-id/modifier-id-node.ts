import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { ModifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType } from '~/analysis/node';
import { SyntaxNode } from '~/analysis/syntax/syntax-node';

export interface ModifierIdNode extends SyntaxNode {
  $: NodeType.MODIFIER_ID;
  modifier: ModifierNode;
  id: IdNode | OperatorNode;
}

export function modifierIdNode(modifier: ModifierNode, id: IdNode | OperatorNode): ModifierIdNode {
  return {
    $: NodeType.MODIFIER_ID,
    start: modifier.start,
    stop: id.stop,
    modifier,
    id,
  };
}
