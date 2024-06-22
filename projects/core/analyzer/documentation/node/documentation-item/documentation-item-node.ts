import {DocumentationDescriptionNode} from '../../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../../../lexical/node/documentation-label/documentation-label-node';
import {$Node} from '../../../syntax/node';
import {SyntaxNode, syntaxNode} from '../../../syntax/node/syntax-node';

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
