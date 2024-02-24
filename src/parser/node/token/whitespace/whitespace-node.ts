import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { SPACE_CODE, TAB_CODE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: $Node.WHITESPACE;
}

export function whitespaceNode(range: SourceRange, text: String2): WhitespaceNode {
  return tokenNode($Node.WHITESPACE, range, text);
}

export function scanWhitespaceNode(context: SyntaxContext): WhitespaceNode | null {
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
