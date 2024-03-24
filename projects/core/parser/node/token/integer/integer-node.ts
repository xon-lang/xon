import {Integer, Nothing, String2, nothing} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {UNDERSCORE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface IntegerNode extends TokenNode {
  $: $Node.INTEGER;
  value: Integer;
}

export function integerNode(range: SourceRange, text: String2): IntegerNode {
  const value = Number(text);

  return tokenNode($Node.INTEGER, {range, text, value});
}

export function scanIntegerNode(context: SyntaxContext): IntegerNode | Nothing {
  const {source, position} = context;

  if (!source.text.isDigit(position.index)) {
    return nothing;
  }

  const text = context.source.text.takeWhile(
    (x, i) => x === UNDERSCORE || source.text.isDigit(i),
    context.position.index,
  );

  const range = context.getRange(text.length, false);

  return integerNode(range, text);
}
