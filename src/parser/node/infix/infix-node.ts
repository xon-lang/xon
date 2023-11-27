import { Node, addNodeChildren } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface InfixNode extends Node {
  $: NodeType.INFIX;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: Node, right: Node): InfixNode {
  const node: InfixNode = {
    $: NodeType.INFIX,
    range: rangeFromNodes(left, right),
    operator,
    left,
    right,
  };

  addNodeChildren(node, operator, left, right);

  return node;
}
