import { Node, NodeType } from '~/node/node';

export interface PostfixNode extends Node {
  operator: Node;
  value: Node;
}

export function postfixNode(operator: Node, value: Node): PostfixNode {
  return {
    type: NodeType.POSTFIX,
    start: value.stop,
    stop: operator.start,
    operator,
    value,
  };
}
