import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { Integer, String2 } from '~/lib/core';
import { NodeType, NonHiddenTokenNode } from '~/node/node';

export interface UnknownNode extends NonHiddenTokenNode {
  $: NodeType.UNKNOWN;
}

export function unknownNode(start: Integer, stop: Integer, text: String2): UnknownNode {
  return {
    $: NodeType.UNKNOWN,
    hidden: [],
    start,
    stop,
    text,
  };
}

export function scanUnknownNode({ text, index }: LexicalAnalysis): UnknownNode | null {
  return unknownNode(index, index, text[index]);
}
