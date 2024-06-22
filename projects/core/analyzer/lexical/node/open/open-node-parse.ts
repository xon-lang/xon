import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {ARRAY_OPEN, GROUP_OPEN, OBJECT_OPEN} from '../../lexical-analyzer-config';
import {OpenNode, openNode} from './open-node';

export function openNodeParse(cursor: TextResourcePosition): OpenNode | Nothing {
  // todo create separate tokens for each lexemes
  const opensLexemes = [GROUP_OPEN, ARRAY_OPEN, OBJECT_OPEN];

  if (!opensLexemes.some((x) => cursor.checkTextAtPosition(x))) {
    return nothing;
  }

  const text = cursor.resource.data[cursor.position.index];
  const range = cursor.getRange(text.length);

  return openNode(range, text);
}
