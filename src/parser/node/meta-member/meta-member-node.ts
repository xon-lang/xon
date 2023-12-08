import { IdNode } from '../../../parser/node/id/id-node';
import { Node } from '../../../parser/node/node';
import { OperatorNode } from '../../../parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
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
    range: rangeFromNodes(instance, id),
    operator,
    instance,
    id,
  };
}
