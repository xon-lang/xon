import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {DOCUMENTATION_OPEN} from '../../lexical-analyzer-config';
import {documentationOpenNode, DocumentationOpenNode} from './documentation-open-node';

export function documentationOpenNodeParse(cursor: TextResourcePosition): DocumentationOpenNode | Nothing {
  if (!cursor.checkTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = DOCUMENTATION_OPEN;
  const range = cursor.getRange(DOCUMENTATION_OPEN.length);

  return documentationOpenNode(range, text);
}
