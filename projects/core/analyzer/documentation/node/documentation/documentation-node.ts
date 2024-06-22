import {Array2, Nothing} from '../../../../../lib/types';
import {CloseNode} from '../../../lexical/node/close/close-node';
import {OpenNode} from '../../../lexical/node/open/open-node';
import {HiddenNode} from '../../../lexical/node/token-node';
import {$Node} from '../../../syntax/node';
import {SyntaxNode, syntaxNode} from '../../../syntax/node/syntax-node';
import {DocumentationItemNode} from '../documentation-item/documentation-item-node';
import {DescriptionDocumentationNode} from '../token/description/description-documentation-node';

export type DocumentationNode = SyntaxNode<$Node.DOCUMENTATION> &
  HiddenNode & {
    // todo should we use Open and Close nodes here ???
    open: OpenNode;
    description?: DescriptionDocumentationNode | Nothing;
    items?: Array2<DocumentationItemNode> | Nothing;
    close?: CloseNode | Nothing;
  };

export function documentationNode(
  open: OpenNode,
  description?: DescriptionDocumentationNode | Nothing,
  items?: Array2<DocumentationItemNode> | Nothing,
  close?: CloseNode | Nothing,
): DocumentationNode {
  return syntaxNode($Node.DOCUMENTATION, {open, description, items, close});
}
