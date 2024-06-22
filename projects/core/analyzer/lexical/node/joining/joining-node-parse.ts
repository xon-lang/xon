import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {JOINING, NL, SPACE} from '../../lexical-analyzer-config';
import {JoiningNode, joiningNode} from './joining-node';

export function joiningNodeParse(cursor: TextResourcePosition): JoiningNode | Nothing {
  if (!cursor.checkTextAtPosition(JOINING)) {
    return nothing;
  }

  let text =
    JOINING + cursor.resource.data.takeWhile((x) => x === SPACE, cursor.position.index + JOINING.length);

  if (cursor.resource.data[cursor.position.index + text.length] === NL) {
    text += NL;
  }

  const range = cursor.getRangeWithNL(text.length);

  return joiningNode(range, text);
}
