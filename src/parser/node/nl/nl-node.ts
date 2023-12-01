import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { CR, CR_CODE, LF, LF_CODE } from '~/parser/util/operators';
import { SourceRange } from '~/source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface NlNode extends TokenNode {
  $: NodeType.NL;
}

export function nlNode(range: SourceRange, text: String2): NlNode {
  return {
    $: NodeType.NL,
    range,
    text,
  };
}

export function scanNlNode(context: ParserContext): NlNode | null {
  if (context.source.characters[context.index] === LF_CODE) {
    const range = context.getRange(LF.length);

    return nlNode(range, LF);
  }

  if (context.source.characters[context.index] === CR_CODE) {
    if (context.source.characters[context.index + 1] === LF_CODE) {
      const range = context.getRange((CR + LF).length);

      return nlNode(range, CR + LF);
    }

    const range = context.getRange(CR.length);

    return nlNode(range, CR);
  }

  return null;
}
