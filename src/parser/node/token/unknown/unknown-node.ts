import { Nothing, String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface UnknownNode extends TokenNode {
  $: $Node.UNKNOWN;
}

export function unknownNode(range: SourceRange, text: String2): UnknownNode {
  return tokenNode($Node.UNKNOWN, range, text);
}

export function scanUnknownNode(context: SyntaxContext): UnknownNode | Nothing {
  const text = context.source.text[context.position.index];
  const range = context.getRange(1);

  return unknownNode(range, text);
}
