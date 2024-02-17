import { rangeFromNodes } from '../../../source/source-range';
import '../../../util/extension';
import { CloseNode } from '../close/close-node';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';
import { OpenNode } from '../open/open-node';

export interface ObjectNode extends SyntaxNode {
  $: $Node.OBJECT;
  // todo
  // type: objectLiteralType;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
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
