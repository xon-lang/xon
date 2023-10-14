import { IdNode } from '~/node/lexical/id/id-node';
import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { Node, NodeType } from '~/node/node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';

export interface MemberNode extends SyntacticNode {
  $: NodeType.MEMBER;
  operator: OperatorNode;
  instance: Node;
  id: IdNode;
}

export function memberNode(operator: OperatorNode, instance: SyntacticNode, id: IdNode): MemberNode {
  return {
    $: NodeType.MEMBER,
    start: instance.start,
    stop: id.stop,
    operator,
    instance,
    id,
  };
}
