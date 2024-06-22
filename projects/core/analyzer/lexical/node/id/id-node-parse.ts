import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {UNDERSCORE} from '../../lexical-config';
import {IdNode, idNode} from './id-node';

export function idNodeParse(cursor: TextResourcePosition): IdNode | Nothing {
  if (!cursor.checkTextAtPosition(UNDERSCORE) && !cursor.resource.data.isLetter(cursor.position.index)) {
    return nothing;
  }

  const text = cursor.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || cursor.resource.data.isLetterOrDigit(i),
    cursor.position.index,
  );

  const range = cursor.getRange(text.length);

  return idNode(range, text);
}
