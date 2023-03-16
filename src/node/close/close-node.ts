import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface CloseNode extends TokenNode {
  type: NodeType.CLOSE;
}

export function closeNode(start: Integer, stop: Integer, text: String2): CloseNode {
  return {
    type: NodeType.CLOSE,
    start,
    stop,
    text,
  };
}

const CLOSE = '}])';

export function scanCloseNode(source: Source, start: Integer, stop: Integer): CloseNode | null {
  if (CLOSE.includes(source.text[start])) {
    return closeNode(start, start, source.text[start]);
  }
  return null;
}
