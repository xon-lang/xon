import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { TokenNode } from '../node';
import { $Node } from '../node-type';

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

export function scanUnknownNode(context: ParserContext): UnknownNode | null {
  const text = context.source.text[context.position.index];
  const range = context.getRange(text.length);

  return unknownNode(range, text);
}
