import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { UnknownNode } from '~/parser/node/unknown/unknown-node';
import { LexicalAnalysis } from '~/parser/parser';
import { NodeType } from '../node-type';

export interface StringNode extends NonHiddenLexicalNode {
  $: NodeType.STRING;
}

export function stringNode(start: Integer, stop: Integer, text: String2): StringNode {
  return {
    $: NodeType.STRING,
    hidden: [],
    start,
    stop,
    text,
  };
}

const QUOTE = "'";

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
