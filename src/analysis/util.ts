import { is } from '~/analysis/is';
import { NodeType, TokenNode } from '~/analysis/node';

export function splitNodes(nodes: TokenNode[], splitNodeType: NodeType, saveSplitNode = false): TokenNode[][] {
  const result: TokenNode[][] = [];
  let chunk: TokenNode[] = [];

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
