import { IdNode } from '~/parser/node/id/id-node';
import { Node } from '~/parser/node/node';
import { textRangeFromNodes } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface MemberNode extends Node {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function memberNode(instance: Node, operator: OperatorNode, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    range: textRangeFromNodes(instance, id),
    operator,
    instance,
    id,
  };
}
