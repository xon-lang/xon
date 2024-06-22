import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {DOCUMENTATION_CLOSE} from '../../lexical-analyzer-config';
import {DocumentationCloseNode, documentationCloseNode} from './documentation-close-node';

export function documentationCloseNodeParse(cursor: TextResourcePosition): DocumentationCloseNode | Nothing {
  if (!cursor.checkTextAtIndex(DOCUMENTATION_CLOSE)) {
    return nothing;
  }

  const text = DOCUMENTATION_CLOSE;
  const range = cursor.getRange(DOCUMENTATION_CLOSE.length);

  return documentationCloseNode(range, text);
}
