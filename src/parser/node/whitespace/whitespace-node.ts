import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { SPACE_CODE, TAB_CODE } from '../../parser-config';
import { TokenNode } from '../node';
import { $Node } from '../node-type';

export interface WhitespaceNode extends TokenNode {
  $: $Node.WHITESPACE;
}

export function whitespaceNode(range: SourceRange, text: String2): WhitespaceNode {
  return {
    $: $Node.WHITESPACE,
    range,
    text,
  };
}

export function scanWhitespaceNode(context: ParserContext): WhitespaceNode | null {
  const code = context.source.characters[context.position.index];

  if (code !== SPACE_CODE && code !== TAB_CODE) {
    return null;
  }

  for (let i = context.position.index + 1; i < context.source.text.length; i++) {
    const nextCode = context.source.characters[i];

    if (nextCode !== SPACE_CODE && nextCode !== TAB_CODE) {
      const text = context.source.text.slice(context.position.index, i);
      const range = context.getRange(text.length);

      return whitespaceNode(range, text);
    }
  }

  const text = context.source.text.slice(context.position.index, context.source.text.length);
  const range = context.getRange(text.length);

  return whitespaceNode(range, text);
}
