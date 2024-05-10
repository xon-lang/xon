import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {WhitespaceNode, whitespaceNode} from './whitespace-node';

export function whitespaceNodeParse(context: SyntaxContext, index: Integer): WhitespaceNode | Nothing {
  if (context.resource.data[index] !== SPACE) {
    return nothing;
  }

  const text = context.resource.data.takeWhile((x) => x === SPACE, index);
  const range = context.getRange(text.length);

  return whitespaceNode(range, text);
}