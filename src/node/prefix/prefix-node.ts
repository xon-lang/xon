import { Node, NodeType } from '~/node/node';

export interface PrefixNode extends Node {
  operator: Node;
  expression: Node;
}

export function prefixNode(operator: Node, expression: Node): PrefixNode {
  return {
    type: NodeType.PREFIX,
    startIndex: operator.startIndex,
    stopIndex: expression.stopIndex,
    text: operator.text + expression.text,
    operator,
    expression,
  };
}
