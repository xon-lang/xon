import {$Node} from '../../../syntax/node';
import {SyntaxNode, syntaxNode} from '../../../syntax/node/syntax-node';
import {DescriptionDocumentationNode} from '../token/description/description-documentation-node';
import {LabelDocumentationNode} from '../token/label/label-documentation-node';

export type DocumentationItemNode = SyntaxNode<$Node.ITEM_DOCUMENTATION> & {
  label: LabelDocumentationNode;
  description: DescriptionDocumentationNode;
};

export function documentationItemNode(
  label: LabelDocumentationNode,
  description: DescriptionDocumentationNode,
): DocumentationItemNode {
  return syntaxNode($Node.ITEM_DOCUMENTATION, {label, description});
}
