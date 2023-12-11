import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { SPACE_CODE, TAB_CODE } from '../../util/config';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: NodeType.WHITESPACE;
}

export function whitespaceNode(range: SourceRange, text: String2): WhitespaceNode {
  return {
    $: NodeType.WHITESPACE,
    range,
    text,
  };
}

export function scanWhitespaceNode(context: ParserContext): WhitespaceNode | null {
  const code = context.source.characters[context.index];

  if (code !== SPACE_CODE && code !== TAB_CODE) {
    return null;
  }

  for (let i = context.index + 1; i < context.source.text.length; i++) {
    const nextCode = context.source.characters[i];

    if (nextCode !== SPACE_CODE && nextCode !== TAB_CODE) {
      const text = context.source.text.slice(context.index, i);
      const range = context.getRange(text.length);

      return whitespaceNode(range, text);
    }
  }

  const text = context.source.text.slice(context.index, context.source.text.length);
  const range = context.getRange(text.length);

  return whitespaceNode(range, text);
}
