import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { $Node, TokenNode } from '../node';

export interface UnknownNode extends TokenNode {
  $: $Node.UNKNOWN;
}

export function unknownNode(range: SourceRange, text: String2): UnknownNode {
  return {
    $: $Node.UNKNOWN,
    range,
    text,
  };
}
