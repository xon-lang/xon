import { is } from '~/analysis/is';
import { Node, NodeType } from '~/analysis/node';

export function splitNodes(nodes: Node[], splitNodeType: NodeType, saveSplitNode = false): Node[][] {
  const result: Node[][] = [];
  let chunk: Node[] = [];

  for (const node of nodes) {
    if (is(node, splitNodeType)) {
      if (saveSplitNode) {
        chunk.push(node);
      }
      if (chunk.length > 0) {
        result.push(chunk);
        chunk = [];
      }
    } else {
      chunk.push(node);
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}
