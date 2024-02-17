import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { COMMA, COMMA_CODE } from '../../syntax-config';
import { SyntaxContext } from '../../syntax-context';
import { $Node, TokenNode } from '../node';

export interface CommaNode extends TokenNode {
  $: $Node.COMMA;
}

export function commaNode(range: SourceRange, text: String2): CommaNode {
  return {
    $: $Node.COMMA,
    range,
    text,
  };
}

export function scanCommaNode(context: SyntaxContext): CommaNode | null {
  if (context.source.characters[context.position.index] === COMMA_CODE) {
    const range = context.getRange(COMMA.length);

    return commaNode(range, COMMA);
  }

  return null;
}
