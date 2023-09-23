import { Node, NodeType, SyntaxNode } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface PrefixNode extends SyntaxNode {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: Node): PrefixNode {
  return {
    $: NodeType.PREFIX,
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
