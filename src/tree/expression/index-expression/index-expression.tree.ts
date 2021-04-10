import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  public object: ExpressionTree;

  public arguments: ArgumentTree[];

  public constructor(public ctx: IndexExpressionContext) {
    super();
    if (!ctx) return;
    
    this.object = getExpressionTree(ctx.expression());
    this.arguments = ArgumentTree.fromContext(ctx.arguments());
  }
}
