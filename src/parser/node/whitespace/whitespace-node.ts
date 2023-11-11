import { String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
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

export function scanWhitespaceNode({ text, index }: Parser): Partial<WhitespaceNode> | null {
  if (text[index] !== SPACE && text[index] !== TAB) {
    return null;
  }

  for (let i = index + 1; i < text.length; i++) {
    const nextChar = text[i];

    if (nextChar !== SPACE && nextChar !== TAB) {
      return whitespaceNode(text.slice(index, i));
    }
  }

  return whitespaceNode(text.slice(index, text.length));
}
