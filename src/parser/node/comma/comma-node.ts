import { ParserContext } from '~/parser/parser-context';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface CommaNode extends TokenNode {
  $: NodeType.COMMA;
}

const COMMA = ',';

export function commaNode(): Partial<CommaNode> {
  return {
    $: NodeType.COMMA,
    text: COMMA,
  };
}

export function scanCommaNode({ index, source }: ParserContext): Partial<CommaNode> | null {
  if (source.text[index] === COMMA) {
    return {
      $: NodeType.COMMA,
      text: COMMA,
    };
  }

  return null;
}
