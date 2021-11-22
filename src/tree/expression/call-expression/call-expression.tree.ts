import { CallExpressionContext, IndexerExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionsTrees, getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  instance: ExpressionTree;
  arguments: ExpressionTree[];
  isIndexCall: boolean;

  constructor(public ctx?: CallExpressionContext | IndexerExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    if (ctx instanceof CallExpressionContext) {
      this.isIndexCall = false;
      this.arguments = getExpressionsTrees(ctx.functionArguments().expression());
    } else {
      this.isIndexCall = true;
      this.arguments = getExpressionsTrees(ctx.indexerArguments().expression());
    }
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
