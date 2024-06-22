import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {DOCUMENTATION_CLOSE} from '../../lexical-config';
import {DocumentationCloseNode, documentationCloseNode} from './documentation-close-node';

export function documentationCloseNodeParse(cursor: TextResourcePosition): DocumentationCloseNode | Nothing {
  if (!cursor.checkTextAtPosition(DOCUMENTATION_CLOSE)) {
    return nothing;
  }

  const text = cursor.resource.data[cursor.position.index];
  const range = cursor.getRange(1);

  return documentationCloseNode(range, text);
}
