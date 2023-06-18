import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType, SyntaxNode } from '~/analysis/node';

export interface InfixNode extends SyntaxNode {
  $: NodeType.INFIX;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: Node, right: Node): InfixNode {
  return {
    $: NodeType.INFIX,
    start: left.start,
    stop: right.stop,
    operator,
    left,
    right,
  };
}
