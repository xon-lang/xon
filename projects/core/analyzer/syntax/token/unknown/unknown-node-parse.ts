import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {UnknownNode, unknownNode} from './unknown-node';

export function unknownNodeParse(cursor: TextResourcePosition): UnknownNode {
  const text = cursor.resource.data[cursor.position.index];
  const range = cursor.getRange(1);

  return unknownNode(range, text);
}
