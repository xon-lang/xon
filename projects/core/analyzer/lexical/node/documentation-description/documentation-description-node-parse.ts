import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {AT, DOCUMENTATION_CLOSE} from '../../lexical-analyzer-config';
import {DocumentationDescriptionNode, documentationDescriptionNode} from './documentation-description-node';

export function documentationDescriptionNodeParse(
  cursor: TextResourcePosition,
): DocumentationDescriptionNode | Nothing {
  const text = cursor.resource.data.takeWhile(
    (x) => x !== AT && !cursor.checkTextAtPosition(DOCUMENTATION_CLOSE),
    cursor.position.index,
  );

  if (text.length === 0) {
    return nothing;
  }

  const range = cursor.getRange(text.length);

  return documentationDescriptionNode(range, text);
}
