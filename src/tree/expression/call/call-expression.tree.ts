import { CallExpressionContext } from '../../../grammar/xon-parser';
import { CallExpressionMetadata } from '../../../metadata/expression/call/call-expression-metadata';
import { getExpressionsTrees, getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  metadata: CallExpressionMetadata;
  instance: ExpressionTree;
  arguments: ExpressionTree[];
  isIndexCall: boolean;

  constructor(public ctx?: CallExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getExpressionsTrees(
      (ctx.functionArguments() || ctx.indexerArguments()).expression(),
    );
    this.isIndexCall = !!ctx.indexerArguments();
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
