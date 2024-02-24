import { Nothing } from '../../../../lib/core';
import '../../../../util/extension';
import { $Node, Node } from '../../node';
import { CloseNode } from '../../token/close/close-node';
import { OpenNode } from '../../token/open/open-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface ObjectNode extends SyntaxNode {
  $: $Node.OBJECT;
  open: OpenNode;
  close: CloseNode | null;
  items: (Node | Nothing)[];
}

export function objectNode(open: OpenNode, close: CloseNode | null, items: Node[]): ObjectNode {
  const lastStatement = items.lastOrNull();

  const node: ObjectNode = {
    $: $Node.OBJECT,
    ...getRangeAndChildren(open, ...items, close),
    open,
    close,
    items,
  };

  return node;
}
