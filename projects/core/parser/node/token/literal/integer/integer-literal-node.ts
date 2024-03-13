import {Nothing, String2, nothing} from '../../../../../lib/core';
import {SourceRange} from '../../../../../source/source-range';
import {UNDERSCORE} from '../../../../syntax-config';
import {SyntaxContext} from '../../../../syntax-context';
import {$Node} from '../../../node';
import {tokenNode} from '../../token-node';
import {LiteralTokenNode} from '../literal-token-node';

export interface IntegerLiteralNode extends LiteralTokenNode {
  $: $Node.INTEGER;
}

export function integerNode(range: SourceRange, text: String2): IntegerLiteralNode {
  return tokenNode($Node.INTEGER, range, text);
}

export function scanIntegerNode(context: SyntaxContext): IntegerLiteralNode | Nothing {
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
