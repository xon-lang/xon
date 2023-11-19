import '~/extensions';
import { CloseNode } from '~/parser/node/close/close-node';
import { OpenNode } from '~/parser/node/open/open-node';
import { rangeFromNodes } from '../../../source/source-range';
import { Node } from '../node';
import { NodeType } from '../node-type';

export interface ArrayNode extends Node {
  $: NodeType.ARRAY;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, items: Node[]): ArrayNode {
  const lastStatement = items.lastOrNull();

  return {
    $: NodeType.ARRAY,
    range: rangeFromNodes(open, close ?? lastStatement ?? open),
    open,
    close,
    items,
  };
}
