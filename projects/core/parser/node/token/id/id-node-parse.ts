import {Integer, Nothing, nothing} from '../../../../lib/core';
import {UNDERSCORE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {IdNode, idNode} from './id-node';

export function idNodeParse(context: SyntaxContext, index: Integer): IdNode | Nothing {
  if (context.resource.data[index] !== UNDERSCORE && !context.resource.data.isLetter(index)) {
    return nothing;
  }

  const text = context.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || context.resource.data.isLetterOrDigit(i),
    index,
  );

  const range = context.getRange(text.length);

  return idNode(range, text);
}
