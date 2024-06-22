import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {DOCUMENTATION_OPEN} from '../../lexical-analyzer-config';
import {documentationOpenNode, DocumentationOpenNode} from './documentation-open-node';

export function documentationOpenNodeParse(cursor: TextResourcePosition): DocumentationOpenNode | Nothing {
  if (!cursor.checkTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = cursor.resource.data[cursor.position.index];
  const range = cursor.getRange(1);

  return documentationOpenNode(range, text);
}
