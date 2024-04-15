import {Nothing, String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

// todo need for it ???
export interface EofNode extends TokenNode {
  $: $Node.EOF;
}

export function eofNode(range: TextResourceRange, text: String2): EofNode {
  return tokenNode($Node.EOF, {range, text});
}

export function eofTokenParse(context: SyntaxContext): EofNode | Nothing {
  const range = context.getRange(0, false);

  return eofNode(range, '');
}
