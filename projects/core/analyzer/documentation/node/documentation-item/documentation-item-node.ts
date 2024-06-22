import {$Node} from '../../../syntax/node';
import {SyntaxNode, syntaxNode} from '../../../syntax/node/syntax-node';
import {DocumentationDescriptionNode} from '../token/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../token/documentation-label/documentation-label-node';

export type DocumentationItemNode = SyntaxNode<$Node.DOCUMENTATION_ITEM> & {
  label: DocumentationLabelNode;
  description: DocumentationDescriptionNode;
};

export function documentationItemNode(
  label: DocumentationLabelNode,
  description: DocumentationDescriptionNode,
): DocumentationItemNode {
  return syntaxNode($Node.DOCUMENTATION_ITEM, {label, description});
}
