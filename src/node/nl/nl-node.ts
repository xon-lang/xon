import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface NlNode extends Node {}

export function nlNode(startIndex: Integer, stopIndex: Integer): NlNode {
  return {
    type: NodeType.NL,
    start: startIndex,
    stop: stopIndex,
  };
}

const LF = '\n';
const CR = '\r';

export function scanNlNode(source: Source, startIndex: Integer, stopIndex: Integer): NlNode | null {
  if (source.text[startIndex] === LF) {
    return nlNode(startIndex, startIndex);
  }
  if (source.text[startIndex] === CR) {
    if (source.text[startIndex + 1] === LF) {
      return nlNode(startIndex, startIndex + 1);
    }
    return nlNode(startIndex, startIndex);
  }

  return null;
}
