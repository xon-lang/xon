import {Integer, Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {UNDERSCORE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface IntegerNode extends TokenNode {
  $: $Node.INTEGER;
  value: Integer;
}

export function integerNode(range: TextResourceRange, text: String2): IntegerNode {
  const value = Number(text);

  return tokenNode($Node.INTEGER, {range, text, value});
}

export function integerTokenParse(context: SyntaxContext): IntegerNode | Nothing {
  const index = context.position.index;
  const data = context.resource.data;

  if (!data.isDigit(index)) {
    return nothing;
  }

  const text = data.takeWhile((x, i) => x === UNDERSCORE || data.isDigit(i), index);
  const range = context.getRange(text.length, false);

  return integerNode(range, text);
}
