import { OperatorExpressionContext } from '../../../grammar/xon-parser';
import { getOperatorType } from '../../type/get-type.util';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class OperatorExpressionTree extends ExpressionTree {
  public operator: string;

  public left: ExpressionTree;

  public right: ExpressionTree;

  public constructor(public ctx: OperatorExpressionContext) {
    super();

    this.operator = ctx.operator().text;
    this.left = getExpressionTree(ctx.expression(0));
    this.right = getExpressionTree(ctx.expression(1));
    this.dataType = getOperatorType(this.operator, this.left, this.right);
  }
}
