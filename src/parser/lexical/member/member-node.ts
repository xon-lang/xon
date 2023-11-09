import { IdNode } from '~/parser/lexical/id/id-node';
import { SyntacticNode } from '~/parser/lexical/lexical-node';
import { Node, NodeType } from '~/parser/lexical/node';
import { OperatorNode } from '~/parser/lexical/operator/operator-node';

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
