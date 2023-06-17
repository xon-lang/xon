import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType, Token } from '~/analysis/node';

export interface InfixNode extends Token {
  $: NodeType.INFIX;
  operator: OperatorNode;
  left: Token;
  right: Token;
}

export function infixNode(operator: OperatorNode, left: Token, right: Token): InfixNode {
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
