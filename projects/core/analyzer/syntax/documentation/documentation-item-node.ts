import {Nothing} from '../../../../lib/types';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../../lexical/node/documentation-label/documentation-label-node';
import {$Node} from '../node';
import {SyntaxNode, syntaxNode} from '../node/syntax-node';

export type DocumentationItemNode = SyntaxNode<$Node.DOCUMENTATION_ITEM> & {
  label: DocumentationLabelNode;
  description?: DocumentationDescriptionNode | Nothing;
};

export function documentationItemNode(
  label: DocumentationLabelNode,
  description?: DocumentationDescriptionNode | Nothing,
): DocumentationItemNode {
  return syntaxNode($Node.DOCUMENTATION_ITEM, {label, description});
}
