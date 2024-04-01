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

export function idNodeParse(context: SyntaxContext): IdNode | Nothing {
  const {position, resource: source} = context;

  if (source.data[position.index] !== UNDERSCORE && !source.data.isLetter(position.index)) {
    return nothing;
  }

  const text = source.data.takeWhile((x, i) => x === UNDERSCORE || source.data.isLetterOrDigit(i), position.index);

  const range = context.getRange(text.length, false);

  return idNode(range, text);
}
