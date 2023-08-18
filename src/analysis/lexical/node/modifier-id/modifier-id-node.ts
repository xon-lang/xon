import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { ModifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

export interface ModifierIdNode extends Node {
  $: NodeType.MODIFIER;
  modifier: ModifierNode;
  id: IdNode | OperatorNode;
}

export function modifierIdNode(modifier: ModifierNode, id: IdNode | OperatorNode): ModifierIdNode {
  return {
    $: NodeType.MODIFIER,
    hidden: [],
    start: modifier.start,
    stop: id.stop,
    modifier,
    id,
  };
}
