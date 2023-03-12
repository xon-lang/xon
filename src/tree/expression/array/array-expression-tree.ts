import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { Node, NodeType } from '~/parser/lexer/node';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class ArrayExpressionTree implements ExpressionTree {
  constructor(public openToken: Node, public parameters: ExpressionTree[], public closeToken: Node) {}
}

export function getArrayExpressionTree(ctx: ArrayExpressionContext) {
  const parameters = ctx.expression().map(getExpressionTree);
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
  return new ArrayExpressionTree(openToken, parameters, closeToken);
}
