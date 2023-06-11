import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

export interface InfixNode extends Node {
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

export function scanIntegerNode({ text, index }: LexicalAnalysis): IntegerNode | null {
