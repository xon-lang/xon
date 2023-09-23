import { NodeType, Token } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';

export interface TypeNode extends Token {
  $: NodeType.TYPE;
  node: Token;
  dataType: DataType;
}

export function typeNode(node: Token, dataType: DataType): TypeNode {
  return {
    $: NodeType.TYPE,
    node,
    dataType,
  };
}
