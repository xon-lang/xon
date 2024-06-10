import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {UNDERSCORE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {IntegerNode, integerNode} from './integer-node';

export function integerNodeParse(context: SyntaxContext, index: Integer): IntegerNode | Nothing {
  if (!context.resource.data.isDigit(index)) {
    return nothing;
  }

  const text = context.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || context.resource.data.isDigit(i),
    index,
  );
  const range = context.getRange(text.length);

  return integerNode(range, text);
}
