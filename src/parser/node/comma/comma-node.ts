import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { COMMA, COMMA_CODE } from '../../parser-config';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

export interface CommaNode extends TokenNode {
  $: NodeType.COMMA;
}

export function commaNode(range: SourceRange, text: String2): CommaNode {
  return {
    $: NodeType.COMMA,
    range,
    text,
  };
}

export function scanCommaNode(context: ParserContext): CommaNode | null {
  if (context.source.characters[context.position.index] === COMMA_CODE) {
    const range = context.getRange(COMMA.length);

    return commaNode(range, COMMA);
  }

  return null;
}
