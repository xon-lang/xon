import { Nothing } from '../../../../lib/core';
import { rangeFromNodes } from '../../../../source/source-range';
import '../../../../util/extension';
import { $Node, Node, addNodeParent } from '../../node';
import { CloseNode } from '../../token/close/close-node';
import { OpenNode } from '../../token/open/open-node';
import { SyntaxNode } from '../syntax-node';

export interface ArrayNode extends SyntaxNode {
  $: $Node.ARRAY;
  open: OpenNode;
  close: CloseNode | null;
  items: (Node | Nothing)[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, items: Node[]): ArrayNode {
  const lastStatement = items.lastOrNull();

  const node: ArrayNode = {
    $: $Node.ARRAY,
    // todo fix it
    range: rangeFromNodes(open, close ?? lastStatement ?? open),
    children: [],
    open,
    close,
    items,
  };

  addNodeParent(node, open, ...items, close);

  return node;
}
