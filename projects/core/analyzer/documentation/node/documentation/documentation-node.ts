import {Array2, Nothing} from '../../../../../lib/types';
import {CloseNode} from '../../../lexical/node/close/close-node';
import {DocumentationDescriptionNode} from '../../../lexical/node/documentation-description/documentation-description-node';
import {HiddenNode} from '../../../lexical/node/lexical-node';
import {OpenNode} from '../../../lexical/node/open/open-node';
import {DocumentationItemNode} from '../../../syntax/documentation/documentation-item-node';
import {$Node} from '../../../syntax/node';
import {SyntaxNode, syntaxNode} from '../../../syntax/node/syntax-node';

export type DocumentationNode = SyntaxNode<$Node.DOCUMENTATION> &
  HiddenNode & {
    // todo should we use Open and Close nodes here ???
    open: OpenNode;
    description?: DocumentationDescriptionNode | Nothing;
    items?: Array2<DocumentationItemNode> | Nothing;
    close?: CloseNode | Nothing;
  };

export function documentationNode(
  open: OpenNode,
  description?: DocumentationDescriptionNode | Nothing,
  items?: Array2<DocumentationItemNode> | Nothing,
  close?: CloseNode | Nothing,
): DocumentationNode {
  return syntaxNode($Node.DOCUMENTATION, {open, description, items, close});
}
