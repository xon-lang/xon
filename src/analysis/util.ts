import { is } from '~/analysis/is';
import { NodeType, Token } from '~/analysis/node';

export function splitNodes(nodes: Token[], splitNodeType: NodeType, saveSplitNode = false): Token[][] {
  const result: Token[][] = [];
  let chunk: Token[] = [];

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
