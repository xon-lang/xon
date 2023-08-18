import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

export interface PostfixNode extends Node {
  $: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Node;
}

export function postfixNode(operator: OperatorNode, value: Node): PostfixNode {
  return {
    $: NodeType.POSTFIX,
    hidden: [],
    start: value.start,
    stop: operator.stop,
    operator,
    value,
  };
}
