import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType, Token } from '~/analysis/node';

export interface PrefixNode extends Token {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Token;
}

export function prefixNode(operator: OperatorNode, value: Token): PrefixNode {
  return {
    $: NodeType.PREFIX,
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
