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

export function scanIntegerNode(context: SyntaxContext): IntegerNode | Nothing {
  const {resource: source, position} = context;

  if (!source.data.isDigit(position.index)) {
    return nothing;
  }

  const text = context.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || source.data.isDigit(i),
    context.position.index,
  );

  const range = context.getRange(text.length, false);

  return integerNode(range, text);
}
