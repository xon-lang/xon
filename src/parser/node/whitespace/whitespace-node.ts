import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface WhitespaceNode extends TokenNode {
  $: NodeType.WHITESPACE;
}

export function whitespaceNode(text: String2): Partial<WhitespaceNode> {
  return {
    $: NodeType.WHITESPACE,
    text,
  };
}

const SPACE = ' ';
const TAB = '\t';

export function scanWhitespaceNode({ source, index }: ParserContext): Partial<WhitespaceNode> | null {
  if (source.text[index] !== SPACE && source.text[index] !== TAB) {
    return null;
  }

  for (let i = index + 1; i < source.text.length; i++) {
    const nextChar = source.text[i];

    if (nextChar !== SPACE && nextChar !== TAB) {
      return whitespaceNode(source.text.slice(index, i));
    }
  }

  return whitespaceNode(source.text.slice(index, source.text.length));
}
