import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { Integer, String2 } from '~/lib/core';
import { HiddenTokenNode, NodeType } from '~/node/node';

export interface WhitespaceNode extends HiddenTokenNode {
  $: NodeType.WHITESPACE;
}

export function whitespaceNode(start: Integer, stop: Integer, text: String2): WhitespaceNode {
  return {
    $: NodeType.WHITESPACE,
    start,
    stop,
    text,
  };
}

const SPACE = ' ';
const TAB = '\t';

export function scanWhitespaceNode({ text, index }: LexicalAnalysis): WhitespaceNode | null {
  if (text[index] !== SPACE && text[index] !== TAB) {
    return null;
  }
  for (let i = index + 1; i < text.length; i++) {
    const nextChar = text[i];
    if (nextChar !== SPACE && nextChar !== TAB) {
      return whitespaceNode(index, i - 1, text.slice(index, i));
    }
  }

  return whitespaceNode(index, text.length - 1, text.slice(index, text.length));
}
