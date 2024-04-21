import {Nothing, nothing} from '../../../../lib/core';
import {UNDERSCORE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {IdNode, idNode} from './id-node';

export function idNodeParse(context: SyntaxContext): IdNode | Nothing {
  const {resource, position} = context;

  if (resource.data[position.index] !== UNDERSCORE && !resource.data.isLetter(position.index)) {
    return nothing;
  }

  const text = resource.data.takeWhile((x, i) => x === UNDERSCORE || resource.data.isLetterOrDigit(i), position.index);

  const range = context.getRange(text.length, false);

  return idNode(range, text);
}
