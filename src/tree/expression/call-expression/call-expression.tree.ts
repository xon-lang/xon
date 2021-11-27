import { FunctionExpressionContext, IndexerExpressionContext } from '../../../grammar/xon-parser';
import { CallExpressionMetadata } from '../../../metadata/expression/call/call-expression-metadata';
import { getExpressionsTrees, getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  metadata: CallExpressionMetadata;
  instance: ExpressionTree;
  arguments: ExpressionTree[];
  isIndexCall: boolean;

  constructor(public ctx?: FunctionExpressionContext | IndexerExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    if (ctx instanceof FunctionExpressionContext) {
      this.isIndexCall = false;
      this.arguments = getExpressionsTrees(ctx.functionArguments().expression());
    } else if (ctx instanceof IndexerExpressionContext) {
      this.isIndexCall = true;
      this.arguments = getExpressionsTrees(ctx.indexerArguments().expression());
    }
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
