import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { SourceRange } from '~/source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface UnknownNode extends TokenNode {
  $: NodeType.UNKNOWN;
}

export function unknownNode(range: SourceRange, text: String2): UnknownNode {
  return {
    $: NodeType.UNKNOWN,
    range,
    text,
  };
}

export function scanUnknownNode(context: ParserContext): UnknownNode | null {
  const text = context.source.text[context.index];
  const range = context.getRange(text.length);

  return unknownNode(range, text);
}
