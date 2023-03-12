import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { getNode } from '~/node/expression-tree-helper';
import { Node, NodeType } from '~/node/node';

export interface ArrayNode extends Node {
  openToken: Node;
  closeToken: Node;
  parameters: Node[];
}

export function arrayNode(ctx: ArrayExpressionContext): ArrayNode {
  const parameters = ctx.expression().map(getNode);
  const open = ctx.OPEN().payload;
  const close = ctx.CLOSE().payload;
  const openToken: Node = {
    startIndex: open.startIndex,
    stopIndex: open.stopIndex,
    nodeType: NodeType.OPEN,
    text: open.text || '',
  };
  const closeToken: Node = {
    startIndex: close.startIndex,
    stopIndex: close.stopIndex,
    nodeType: NodeType.CLOSE,
    text: close.text || '',
  };
  return {
    nodeType: NodeType.ARRAY,
    startIndex: openToken.startIndex,
    stopIndex: closeToken.stopIndex,
    text: openToken.text + parameters.map((x) => x.text).join('') + closeToken.text,
    openToken,
    closeToken,
    parameters,
  };
}
