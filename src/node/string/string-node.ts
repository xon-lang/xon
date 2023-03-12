import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';
import { unexpectedNode } from '~/node/unexpected/unexpected-node';

export interface StringNode extends Node {}

export function stringNode(startIndex: Integer, stopIndex: Integer): StringNode {
  return {
    type: NodeType.STRING,
    startIndex,
    stopIndex,
  };
}

const QUOTE = "'";

export function scanStringNode(source: Source, startIndex: Integer, stopIndex: Integer): StringNode | null {
  if (source.text[startIndex] === QUOTE) {
    const nextQuoteIndex = source.text.indexOf(QUOTE, startIndex + 1);
    if (nextQuoteIndex < 0 || nextQuoteIndex > stopIndex) {
      return unexpectedNode(startIndex, stopIndex);
    }
    return stringNode(startIndex, nextQuoteIndex);
  }
  return null;
}
