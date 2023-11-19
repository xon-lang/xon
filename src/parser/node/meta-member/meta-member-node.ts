import { IdNode } from '~/parser/node/id/id-node';
import { Node } from '~/parser/node/node';
import { textRangeFromNodes } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface MetaMemberNode extends Node {
  $: NodeType.META_MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function metaMemberNode(instance: Node, operator: OperatorNode, id: IdNode): MetaMemberNode {
  return {
    $: NodeType.META_MEMBER,
    range: textRangeFromNodes(instance, id),
    operator,
    instance,
    id,
  };
}
