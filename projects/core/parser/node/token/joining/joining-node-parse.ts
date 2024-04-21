import {Nothing, nothing} from '../../../../lib/core';
import {JOINING, NL, SPACE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {JoiningNode, joiningNode} from './joining-node';

export function joiningNodeParse(context: SyntaxContext): JoiningNode | Nothing {
  const {resource, position} = context;

  if (resource.data[position.index] !== JOINING) {
    return nothing;
  }

  let text = JOINING + resource.data.takeWhile((x) => x === SPACE, position.index + JOINING.length);

  if (resource.data[position.index + text.length] === NL) {
    text += NL;
  }

  const range = context.getRange(text.length, true);

  return joiningNode(range, text);
}
