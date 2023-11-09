import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/lexical/lexical-node';
import { NodeType } from '~/parser/lexical/node';
import { LexicalAnalysis } from '~/parser/parser';

export interface UnknownNode extends NonHiddenLexicalNode {
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
