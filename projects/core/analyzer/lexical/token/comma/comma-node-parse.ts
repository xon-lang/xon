import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {COMMA} from '../../lexical-config';
import {CommaNode, commaNode} from './comma-node';

export function commaNodeParse(cursor: TextResourcePosition): CommaNode | Nothing {
  if (!cursor.checkTextAtPosition(COMMA)) {
    return nothing;
  }

  const text = COMMA;
  const range = cursor.getRange(text.length);

  return commaNode(range, text);
}
