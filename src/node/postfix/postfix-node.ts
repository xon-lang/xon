import { Node, NodeType } from '~/node/node';

export interface PostfixNode extends Node {
  operator: Node;
  expression: Node;
}

export function postfixNode(operator: Node, expression: Node): PostfixNode {
  return {
    nodeType: NodeType.POSTFIX,
    startIndex: expression.stopIndex,
    stopIndex: operator.startIndex,
    text: expression.text + operator.text,
    operator,
    expression,
  };
}
