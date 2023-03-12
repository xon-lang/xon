import { Source } from '~/compiler/source/source';
import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/node/node';
import { getNode } from '~/node/node-helper';

export interface ArrayNode extends Node {
  openToken: Node;
  closeToken: Node;
  parameters: Node[];
}

export function arrayNode(source: Source, ctx: ArrayExpressionContext): ArrayNode {
  const parameters = ctx.expression().map((x) => getNode(source, x));
  const open = ctx.OPEN().payload;
  const close = ctx.CLOSE().payload;
  const openToken: Node = {
    startIndex: open.startIndex,
    stopIndex: open.stopIndex,
    type: NodeType.OPEN,
  };
  const closeToken: Node = {
    startIndex: close.startIndex,
    stopIndex: close.stopIndex,
    type: NodeType.CLOSE,
  };
  return {
    type: NodeType.ARRAY,
    startIndex: openToken.startIndex,
    stopIndex: closeToken.stopIndex,
    openToken,
    closeToken,
    parameters,
  };
}
