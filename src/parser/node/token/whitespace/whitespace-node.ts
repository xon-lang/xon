import { Nothing, String2, nothing } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { SPACE, TAB } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: $Node.WHITESPACE;
}

export function whitespaceNode(range: SourceRange, text: String2): WhitespaceNode {
  return tokenNode($Node.WHITESPACE, range, text);
}

export function scanWhitespaceNode(context: SyntaxContext): WhitespaceNode | Nothing {
  const { source, position } = context;
  const text = source.text.takeWhile((x) => x === SPACE || x === TAB, position.index);

  if (text.length === 0) {
    return nothing;
  }

  const range = context.getRange(text.length, false);

  return whitespaceNode(range, text);
}
