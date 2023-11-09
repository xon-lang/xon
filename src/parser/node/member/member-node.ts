import { IdNode } from '~/parser/node/id/id-node';
import { SyntacticNode } from '~/parser/node/lexical-node';
import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

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
