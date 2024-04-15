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
  const {resource, position} = context;

  if (!resource.data.isDigit(position.index)) {
    return nothing;
  }

  const text = resource.data.takeWhile((x, i) => x === UNDERSCORE || resource.data.isDigit(i), position.index);
  const range = context.getRange(text.length, false);

  return integerNode(range, text);
}
