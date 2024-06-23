import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {AT, DOCUMENTATION_CLOSE} from '../../lexical-analyzer-config';
import {DocumentationDescriptionNode, documentationDescriptionNode} from './documentation-description-node';

export function documentationDescriptionNodeParse(
  cursor: TextResourcePosition,
): DocumentationDescriptionNode | Nothing {
  const text = cursor.resource.data.takeWhile(
    (x, i) => x !== AT && !cursor.checkTextAtIndex(DOCUMENTATION_CLOSE, i),
    cursor.position.index,
  );

  if (text.length === 0) {
    return nothing;
  }

  const range = cursor.getRangeWithNL(text.length);

  return documentationDescriptionNode(range, text);
}
