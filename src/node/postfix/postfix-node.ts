import { Node, NodeType, SyntaxNode } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface PostfixNode extends SyntaxNode {
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
