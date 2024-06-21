import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {NL, SPACE} from '../../../lexical/lexical-config';
import {NlNode, nlNode} from './nl-node';

export function nlNodeParse(cursor: TextResourcePosition): NlNode | Nothing {
  if (!cursor.checkTextAtPosition(NL)) {
    return nothing;
  }

  const textWithIndents = cursor.resource.data.takeWhile(
    (x) => x === NL || x === SPACE,
    cursor.position.index,
  );

  const lastNlIndex = textWithIndents.lastIndexOf(NL);

  const text = textWithIndents.slice(0, lastNlIndex + 1);
  const range = cursor.getRangeWithNL(text.length);

  return nlNode(range, text);
}
