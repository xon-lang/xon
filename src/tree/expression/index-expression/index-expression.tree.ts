import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsTrees } from '../../argument/argument-tree.helper';
import { ArgumentTree } from '../../argument/argument.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  instance: ExpressionTree;
  arguments: ArgumentTree[];

  constructor(public ctx?: IndexExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getArgumentsTrees(ctx.indexArguments());
  }

  toString(): string {
    return `${this.instance}[${this.arguments.join(', ')}]`;
  }
}
