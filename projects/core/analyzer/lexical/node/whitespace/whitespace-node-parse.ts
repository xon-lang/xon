import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {SPACE} from '../../lexical-analyzer-config';
import {WhitespaceNode, whitespaceNode} from './whitespace-node';

export function whitespaceNodeParse(cursor: TextResourcePosition): WhitespaceNode | Nothing {
  if (!cursor.checkTextAtPosition(SPACE)) {
    return nothing;
  }

  const text = cursor.resource.data.takeWhile((x) => x === SPACE, cursor.position.index);
  const range = cursor.getRange(text.length);

  return whitespaceNode(range, text);
}
