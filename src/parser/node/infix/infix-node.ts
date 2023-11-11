import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface InfixNode extends Node {
  $: NodeType.INFIX;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: Node, right: Node): InfixNode {
  return {
    $: NodeType.INFIX,
    start: clonePosition(left.start),
    stop: clonePosition(right.stop),
    operator,
    left,
    right,
  };
}
