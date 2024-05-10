import {Array2, Nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {$Node} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {ItemNode} from '../group/item-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ObjectNode extends SyntaxNode {
  $: $Node.OBJECT;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: Array2<ItemNode>;
}

export function objectNode(open: OpenNode, items: Array2<ItemNode>, close: CloseNode | Nothing): ObjectNode {
  const node = syntaxNode($Node.OBJECT, {open, items, close});

  return node;
}
