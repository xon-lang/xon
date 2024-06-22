import {Nothing, nothing} from '../../../../../../lib/types';
import {TextResourcePosition} from '../../../../../util/resource/text/text-resource-position';
import {AT} from '../../../../lexical/lexical-config';
import {DocumentationLabelNode, documentationLabelNode} from './documentation-label-node';

export function labelDocumentationNodeParse(cursor: TextResourcePosition): DocumentationLabelNode | Nothing {
  if (!cursor.checkTextAtPosition(AT)) {
    return nothing;
  }

  const text = cursor.resource.data.takeWhile(
    (x, i) => x === AT || cursor.resource.data.isLetterOrDigit(i),
    cursor.position.index,
  );

  const range = cursor.getRange(text.length);

  return documentationLabelNode(range, text);
}
