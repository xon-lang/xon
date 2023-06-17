import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType, Token } from '~/analysis/node';

export interface PostfixNode extends Token {
  $: NodeType.POSTFIX;
  operator: OperatorNode;
  value: Token;
}

export function postfixNode(operator: OperatorNode, value: Token): PostfixNode {
  return {
    $: NodeType.POSTFIX,
    start: value.start,
    stop: operator.stop,
    operator,
    value,
  };
}
