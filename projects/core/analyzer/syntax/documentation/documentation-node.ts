import {Array2, Nothing} from '../../../../lib/types';
import {DocumentationCloseNode} from '../../lexical/node/documentation-close/documentation-close-node';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationOpenNode} from '../../lexical/node/documentation-open/documentation-open-node';
import {HiddenNode} from '../../lexical/node/lexical-node';
import {$Node} from '../node';
import {SyntaxNode, syntaxNode} from '../node/syntax-node';
import {DocumentationItemNode} from './documentation-item-node';

export type DocumentationNode = SyntaxNode<$Node.DOCUMENTATION> &
  HiddenNode & {
    // todo should we use Open and Close nodes here ???
    open: DocumentationOpenNode;
    description?: DocumentationDescriptionNode | Nothing;
    items?: Array2<DocumentationItemNode> | Nothing;
    close?: DocumentationCloseNode | Nothing;
  };

export function documentationNode(
  open: DocumentationOpenNode,
  description?: DocumentationDescriptionNode | Nothing,
  items?: Array2<DocumentationItemNode> | Nothing,
  close?: DocumentationCloseNode | Nothing,
): DocumentationNode {
  return syntaxNode($Node.DOCUMENTATION, {open, description, items, close});
}
