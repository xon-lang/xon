import { InfixExpressionContext } from '../../../grammar/xon-parser';
import { getBinaryType } from '../../type/get-type.util';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { OperatorExpressionTree } from '../operator-expression.tree';

export class InfixExpressionTree extends OperatorExpressionTree {
  public left: ExpressionTree;

  public right: ExpressionTree;

  public constructor(public ctx: InfixExpressionContext) {
    super(ctx);

    this.left = getExpressionTree(ctx.expression(0));
    this.right = getExpressionTree(ctx.expression(1));
  }

  public getType(): TypeTree {
    return getBinaryType(this.operator, this.left, this.right);
  }
}
