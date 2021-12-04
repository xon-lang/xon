import { CallExpressionContext } from '../../../grammar/xon-parser';
import { CallExpressionMetadata } from '../../../metadata/expression/call/call-expression-metadata';
import { getExpressionsTrees, getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  metadata: CallExpressionMetadata;
  instance: ExpressionTree;
  arguments: ExpressionTree[];

  constructor(public ctx: CallExpressionContext) {
    super();

    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getExpressionsTrees(ctx.methodArguments().expression());
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
