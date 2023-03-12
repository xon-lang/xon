import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/parser/lexer/node';
import { getNode } from '~/tree/expression-tree-helper';

export class ArrayNode implements Node {
  nodeType = NodeType.ARRAY;
  startIndex: number;
  stopIndex: number;
  text: string;

  constructor(public openToken: Node, public parameters: Node[], public closeToken: Node) {
    this.startIndex = openToken.startIndex;
    this.stopIndex = closeToken.stopIndex;
    this.text = openToken.text + parameters.map((x) => x).join('') + closeToken.text;
  }
}

export function getArrayNode(ctx: ArrayExpressionContext) {
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
  return new ArrayNode(openToken, parameters, closeToken);
}
