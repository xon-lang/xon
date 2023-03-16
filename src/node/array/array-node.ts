import { CloseNode } from '~/node/close/close-node';
import { Node, NodeType } from '~/node/node';
import { OpenNode } from '~/node/open/open-node';

export interface ArrayNode extends Node {
  open: OpenNode;
  close: CloseNode;
  parameters: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode, parameters: Node[]): ArrayNode {
  return {
    type: NodeType.ARRAY,
    start: open.start,
    stop: close.stop,
    open,
    close,
    parameters,
  };
}
