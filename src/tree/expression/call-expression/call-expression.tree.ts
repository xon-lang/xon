import { CallExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsTrees } from '../../argument/argument-tree.helper';
import { ArgumentTree } from '../../argument/argument.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class CallExpressionTree extends ExpressionTree {
  instance: ExpressionTree;
  arguments: ArgumentTree[];

  constructor(public ctx?: CallExpressionContext) {
    super();
    if (!ctx) return;

    this.arguments = getArgumentsTrees(ctx.functionArguments());
    this.instance = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
