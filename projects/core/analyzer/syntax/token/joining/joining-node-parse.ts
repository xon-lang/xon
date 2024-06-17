import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {JOINING, NL, SPACE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {JoiningNode, joiningNode} from './joining-node';

export function joiningNodeParse(context: SyntaxContext, index: Integer): JoiningNode | Nothing {
  if (!context.checkLexemeAtIndex(JOINING, index)) {
    return nothing;
  }

  let text = JOINING + context.resource.data.takeWhile((x) => x === SPACE, index + JOINING.length);

  if (context.resource.data[index + text.length] === NL) {
    text += NL;
  }

  const range = context.getRangeWithNL(text.length);

  return joiningNode(range, text);
}
