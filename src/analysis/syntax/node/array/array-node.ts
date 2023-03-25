import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { OpenNode } from '~/analysis/lexical/node/open/open-node';
import { Node, NodeType } from '~/analysis/node';

export interface ArrayNode extends Node {
  $: NodeType.ARRAY;
  open: OpenNode;
  close: CloseNode;
  items: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode, items: Node[]): ArrayNode {
  return {
    $: NodeType.ARRAY,
    start: open.start,
    stop: close.stop,
    open,
    close,
    items,
  };
}
