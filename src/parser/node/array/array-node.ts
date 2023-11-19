import '~/extensions';
import { CloseNode } from '~/parser/node/close/close-node';
import { textRangeFromNodes } from '~/parser/node/node-position';
import { OpenNode } from '~/parser/node/open/open-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export const ARRAY_NODE_OPEN = '[';
export const ARRAY_NODE_CLOSE = ']';

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
    range: textRangeFromNodes(open, close ?? lastStatement ?? open),
    open,
    close,
    items,
  };
}
