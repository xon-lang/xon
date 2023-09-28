import { IdNode } from '~/node/lexical/id/id-node';
import { ModifierNode } from '~/node/lexical/modifier/modifier-node';
import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { NodeType } from '~/node/node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';

export interface ModifierIdNode extends SyntacticNode {
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
