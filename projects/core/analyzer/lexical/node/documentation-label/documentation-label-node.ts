import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {AT} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationLabelNode = LexicalNode<$Node.DOCUMENTATION_LABEL> & {
  name: String2;
};

export function documentationLabelNode(range: TextRange, text: String2): DocumentationLabelNode {
  const name = text.slice(AT.length);

  return lexicalNode({$: $Node.DOCUMENTATION_LABEL, range, text, name});
}
