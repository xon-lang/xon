import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {OPERATORS_SORTED} from '../../lexical-analyzer-config';
import {idNodeParse} from '../id/id-node-parse';
import {LexicalNode} from '../lexical-node';
import {operatorNode} from './operator-node';

export function operatorNodeParse(cursor: TextResourcePosition): LexicalNode | Nothing {
  const text = OPERATORS_SORTED.last((x) => cursor.checkTextAtPosition(x));

  if (!text) {
    return nothing;
  }

  const id = idNodeParse(cursor);

  if (id && id.text.length > text.length) {
    return id;
  }

  const range = cursor.getRange(text.length);

  return operatorNode(range, text);
}
