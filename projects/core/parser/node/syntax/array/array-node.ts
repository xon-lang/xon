import {Nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {$Node, Node} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ArrayNode extends SyntaxNode {
  $: $Node.ARRAY;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: (Node | Nothing)[];
}

export function arrayNode(open: OpenNode, close: CloseNode | Nothing, items: Node[]): ArrayNode {
  const node = syntaxNode($Node.ARRAY, {open, items, close});

  return node;
}
