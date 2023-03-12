import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/node/node';
import { getNode } from '~/node/node-helper';

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
    type: NodeType.OPEN,
    text: open.text || '',
  };
  const closeToken: Node = {
    startIndex: close.startIndex,
    stopIndex: close.stopIndex,
    type: NodeType.CLOSE,
    text: close.text || '',
  };
  return {
    type: NodeType.ARRAY,
    startIndex: openToken.startIndex,
    stopIndex: closeToken.stopIndex,
    text: openToken.text + parameters.map((x) => x.text).join('') + closeToken.text,
    openToken,
    closeToken,
    parameters,
  };
}
