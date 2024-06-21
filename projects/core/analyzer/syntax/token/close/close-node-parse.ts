import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {ARRAY_CLOSE, GROUP_CLOSE, OBJECT_CLOSE} from '../../../lexical/lexical-config';
import {CloseNode, closeNode} from './close-node';

export function closeNodeParse(cursor: TextResourcePosition): CloseNode | Nothing {
  // todo create separate tokens for each lexemes
  const closesLexemes = [GROUP_CLOSE, ARRAY_CLOSE, OBJECT_CLOSE];

  if (!closesLexemes.some((x) => cursor.checkTextAtPosition(x))) {
    return nothing;
  }

  const text = cursor.resource.data[cursor.position.index];
  const range = cursor.getRange(text.length);

  return closeNode(range, text);
}
