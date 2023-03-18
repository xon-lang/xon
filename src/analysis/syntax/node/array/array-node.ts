import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { OpenNode } from '~/analysis/lexical/node/open/open-node';
import { Node, NodeType } from '~/analysis/node';

export interface ArrayNode extends Node {
  $: NodeType.ARRAY;
  open: OpenNode;
  close: CloseNode;
  parameters: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode, parameters: Node[]): ArrayNode {
  return {
    $: NodeType.ARRAY,
    open,
    close,
    parameters,
  };
}
