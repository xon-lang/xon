import '../../../extensions';
import { CloseNode } from '../../../parser/node/close/close-node';
import { OpenNode } from '../../../parser/node/open/open-node';
import { rangeFromNodes } from '../../../source/source-range';
import { ArrayLiteralType, arrayLiteralType } from '../../type/array/array-type';
import { nothingType } from '../../type/core';
import { Node, SyntaxNode, addNodeParent } from '../node';
import { NodeType } from '../node-type';

export interface ArrayNode extends SyntaxNode {
  $: NodeType.ARRAY;
  type: ArrayLiteralType;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, items: Node[]): ArrayNode {
  const lastStatement = items.lastOrNull();

  const node: ArrayNode = {
    $: NodeType.ARRAY,
    type: arrayLiteralType([nothingType()]),
    range: rangeFromNodes(open, close ?? lastStatement ?? open),
    children: [],
    open,
    close,
    items,
  };

  addNodeParent(node, open, ...items, close);

  return node;
}
