import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationLabelNode = LexicalNode<$Node.DOCUMENTATION_LABEL>;

export function documentationLabelNode(range: TextRange, text: String2): DocumentationLabelNode {
  return lexicalNode({$: $Node.DOCUMENTATION_LABEL, range, text});
}
