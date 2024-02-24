import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { UNDERSCORE_CODE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface IntegerNode extends TokenNode {
  $: $Node.INTEGER;
}

export function integerNode(range: SourceRange, text: String2): IntegerNode {
  return tokenNode($Node.INTEGER, range, text);
}

export function scanIntegerNode(context: SyntaxContext): IntegerNode | null {
  const { source, position } = context;

  if (!source.text.isDigit(position.index)) {
    return null;
  }

  const text = context.source.text.takeWhile(
    (x, i) => x.charCodeAt(0) === UNDERSCORE_CODE || source.text.isLetterOrDigit(i),
    context.position.index,
  );

  const range = context.getRange(text.length);

  return integerNode(range, text);
}
