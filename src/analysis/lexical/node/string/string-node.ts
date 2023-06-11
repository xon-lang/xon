import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { UnknownNode } from '~/analysis/lexical/node/unknown/unknown-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface StringNode extends LexicalNode {
  $: NodeType.STRING;
}

export function stringNode(start: Integer, stop: Integer, text: String2): StringNode {
  return {
    $: NodeType.STRING,
    start,
    stop,
    text,
  };
}

const QUOTE = '\'';

export function scanStringNode({ text, index }: LexicalAnalysis): StringNode | UnknownNode | null {
  if (text[index] === QUOTE) {
    const nextQuoteIndex = text.indexOf(QUOTE, index + 1);
    if (nextQuoteIndex < 0) {
      return stringNode(index, text.length - 1, text.slice(index, text.length));
    }

    return stringNode(index, nextQuoteIndex, text.slice(index, nextQuoteIndex + 1));
  }

  return null;
}
