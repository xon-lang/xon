import { LexicalNode } from '~/analysis/lexical/LexicalNode';
import { NodeType } from '~/analysis/Node';
import { Integer, String2 } from '~/lib/core';

export interface UnknownNode extends LexicalNode {
  type: NodeType.UNKNOWN;
}

export function unexpectedNode(start: Integer, stop: Integer, text: String2): UnknownNode {
  return {
    type: NodeType.UNKNOWN,
    start,
    stop,
    text,
  };
}
