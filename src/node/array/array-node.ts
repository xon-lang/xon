import { Node, NodeType } from '~/analysis/node';
import { CloseNode } from '~/node/close/close-node';
import { OpenNode } from '~/node/open/open-node';

export interface ArrayNode extends Node {
  type: NodeType.ARRAY;
  open: OpenNode;
  close: CloseNode;
  parameters: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode, parameters: Node[]): ArrayNode {
  return {
    type: NodeType.ARRAY,
    open,
    close,
    parameters,
  };
}
