import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {UNDERSCORE} from '../../../lexical/lexical-config';
import {IntegerNode, integerNode} from './integer-node';

export function integerNodeParse(cursor: TextResourcePosition): IntegerNode | Nothing {
  if (!cursor.resource.data.isDigit(cursor.position.index)) {
    return nothing;
  }

  const text = cursor.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || cursor.resource.data.isDigit(i),
    cursor.position.index,
  );

  const range = cursor.getRange(text.length);

  return integerNode(range, text);
}
