import {Nothing, nothing} from '../../../../lib/core';
import {UNDERSCORE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {IntegerNode, integerNode} from './integer-node';

export function integerNodeParse(context: SyntaxContext): IntegerNode | Nothing {
  const {resource, position} = context;

  if (!resource.data.isDigit(position.index)) {
    return nothing;
  }

  const text = resource.data.takeWhile((x, i) => x === UNDERSCORE || resource.data.isDigit(i), position.index);
  const range = context.getRange(text.length, false);

  return integerNode(range, text);
}
