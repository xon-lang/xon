import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { CR, CR_CODE, LF, LF_CODE } from '../../parser-config';
import { TokenNode } from '../node';
import { $Node } from '../node-type';

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

export function scanNlNode(context: ParserContext): NlNode | null {
  if (context.source.characters[context.position.index] === LF_CODE) {
    const range = context.getRange(LF.length);

    return nlNode(range, LF);
  }

  if (context.source.characters[context.position.index] === CR_CODE) {
    if (context.source.characters[context.position.index + 1] === LF_CODE) {
      const range = context.getRange((CR + LF).length);

      return nlNode(range, CR + LF);
    }

    const range = context.getRange(CR.length);

    return nlNode(range, CR);
  }

  return null;
}
