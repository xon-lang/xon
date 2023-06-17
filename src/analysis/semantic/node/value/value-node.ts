import { NodeType, Token } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';

export interface ValueNode extends Token {
  $: NodeType.VALUE;
  node: Token;
  dataType: DataType;
}

export function typeNode(node: Token, dataType: DataType): ValueNode {
  return {
    $: NodeType.VALUE,
    node,
    dataType,
  };
}
