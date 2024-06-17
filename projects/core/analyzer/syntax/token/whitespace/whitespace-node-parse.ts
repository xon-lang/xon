import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {SPACE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {WhitespaceNode, whitespaceNode} from './whitespace-node';

export function whitespaceNodeParse(context: SyntaxContext, index: Integer): WhitespaceNode | Nothing {
  if (context.resource.data.take(SPACE.length, index) !== SPACE) {
    return nothing;
  }

  const text = context.resource.data.takeWhile((x) => x === SPACE, index);
  const range = context.getRange(text.length);

  return whitespaceNode(range, text);
}
