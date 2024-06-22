import {Nothing, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {SemanticNode} from '../../../semantic/node/semantic-node';
import {$Node} from '../../../syntax/node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationLabelNode = LexicalNode<$Node.DOCUMENTATION_LABEL> & {
  name: String2;
  semantic?: SemanticNode | Nothing;
};

export function documentationLabelNode(range: TextRange, text: String2): DocumentationLabelNode {
  const name = text.slice(1);

  return lexicalNode({$: $Node.DOCUMENTATION_LABEL, range, text, name});
}
