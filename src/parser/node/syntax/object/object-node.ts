import {Nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {$Node, Node} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ObjectNode extends SyntaxNode {
  $: $Node.OBJECT;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: (Node | Nothing)[];
}

export function objectNode(open: OpenNode, close: CloseNode | Nothing, items: Node[]): ObjectNode {
  const node = syntaxNode($Node.OBJECT, {open, items, close});

  return node;
}
