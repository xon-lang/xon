import {Nothing, String2, nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {UNDERSCORE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface IdNode extends TokenNode {
  $: $Node.ID;
}

export function idNode(range: TextResourceRange, text: String2): IdNode {
  return tokenNode($Node.ID, {range, text});
}

export function idTokenParse(context: SyntaxContext): IdNode | Nothing {
  const index = context.position.index;
  const data = context.resource.data;

  if (data[index] !== UNDERSCORE && !data.isLetter(index)) {
    return nothing;
  }

  const text = data.takeWhile((x, i) => x === UNDERSCORE || data.isLetterOrDigit(i), index);

  const range = context.getRange(text.length, false);

  return idNode(range, text);
}
