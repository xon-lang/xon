import { Nothing } from '../../../../lib/core';
import { rangeFromNodes } from '../../../../source/source-range';
import '../../../../util/extension';
import { $Node, Node, addNodeParent } from '../../node';
import { CloseNode } from '../../token/close/close-node';
import { OpenNode } from '../../token/open/open-node';
import { SyntaxNode } from '../syntax-node';

export interface ObjectNode extends SyntaxNode {
  $: $Node.OBJECT;
  // todo
  // type: objectLiteralType;
  open: OpenNode;
  close: CloseNode | null;
  items: (Node | Nothing)[];
}

export function objectNode(open: OpenNode, close: CloseNode | null, items: Node[]): ObjectNode {
  const lastStatement = items.lastOrNull();

  const node: ObjectNode = {
    $: $Node.OBJECT,
    range: rangeFromNodes(open, close ?? lastStatement ?? open),
    children: [],
    open,
    close,
    items,
  };

  addNodeParent(node, open, ...items, close);

  return node;
}
