import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { SyntacticNode } from '../node';
import { NodeType } from '../node-type';

export interface PostfixNode extends SyntacticNode {
  $: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Node;
}

export function postfixNode(operator: OperatorNode, value: SyntacticNode): PostfixNode {
  return {
    $: NodeType.POSTFIX,
    start: value.start,
    stop: operator.stop,
    operator,
    value,
  };
}
