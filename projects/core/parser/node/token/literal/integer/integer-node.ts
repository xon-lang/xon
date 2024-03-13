import {Nothing, String2, nothing} from '../../../../../lib/core';
import {SourceRange} from '../../../../../source/source-range';
import {UNDERSCORE} from '../../../../syntax-config';
import {SyntaxContext} from '../../../../syntax-context';
import {$Node} from '../../../node';
import {tokenNode} from '../../token-node';
import {LiteralTokenNode} from '../literal-token-node';

// todo rename to IntegerLiteralNode
export interface IntegerNode extends LiteralTokenNode {
  $: $Node.INTEGER;
}

export function integerNode(range: SourceRange, text: String2): IntegerNode {
  return tokenNode($Node.INTEGER, range, text);
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
