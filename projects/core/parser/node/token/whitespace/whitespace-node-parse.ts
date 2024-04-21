import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {WhitespaceNode, whitespaceNode} from './whitespace-node';

export function whitespaceNodeParse(context: SyntaxContext, index: Integer): WhitespaceNode | Nothing {
  const text = context.resource.data.takeWhile((x) => x === SPACE, index);

  if (text.length === 0) {
    return nothing;
  }

  const range = context.getRange(text.length, false);

  return whitespaceNode(range, text);
}
