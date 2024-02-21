import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { NL, NL_CODE } from '../../syntax-config';
import { SyntaxContext } from '../../syntax-context';
import { $Node, TokenNode } from '../node';

export interface NlNode extends TokenNode {
  $: $Node.NL;
}

export function nlNode(range: SourceRange, text: String2): NlNode {
  return {
    $: $Node.NL,
    range,
    text,
  };
}

export function scanNlNode(context: SyntaxContext): NlNode | null {
  if (context.source.characters[context.position.index] === NL_CODE) {
    const range = context.getRange(NL.length);

    return nlNode(range, NL);
  }

  return null;
}
