import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface OpenNode extends TokenNode {
  type: NodeType.OPEN;
}

export function openNode(start: Integer, stop: Integer, text: String2): OpenNode {
  return {
    type: NodeType.OPEN,
    start,
    stop,
    text,
  };
}

const OPEN = '([{';

export function scanOpenNode(source: Source, start: Integer, stop: Integer): OpenNode | null {
  if (OPEN.includes(source.text[start])) {
    return openNode(start, start, source.text[start]);
  }
  return null;
}
