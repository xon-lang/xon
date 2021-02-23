import { PostfixExpressionContext } from '../../../grammar/xon-parser';
import { getPostfixType } from '../../type/get-type.util';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { OperatorExpressionTree } from '../operator-expression.tree';

export class PostfixExpressionTree extends OperatorExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx: PostfixExpressionContext) {
    super(ctx);
    this.value = getExpressionTree(ctx.expression());
  }

  public getType(): TypeTree {
    return getPostfixType(this.operator, this.value);
  }
}
