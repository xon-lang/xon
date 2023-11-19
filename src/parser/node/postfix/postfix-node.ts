import { Node } from '~/parser/node/node';
import { textRangeFromNodes } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface PostfixNode extends Node {
  $: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Node;
}

export function postfixNode(operator: OperatorNode, value: Node): PostfixNode {
  return {
    $: NodeType.POSTFIX,
    range: textRangeFromNodes(value, operator),
    operator,
    value,
  };
}
