import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { Node, NodeType } from '~/node/node';
import { SyntacticNode } from '../syntactic-node';

export interface PostfixNode extends SyntacticNode {
  $: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Node;
}

export function postfixNode(operator: OperatorNode, value: Node): PostfixNode {
  return {
    $: NodeType.POSTFIX,
    start: value.start,
    stop: operator.stop,
    operator,
    value,
  };
}
