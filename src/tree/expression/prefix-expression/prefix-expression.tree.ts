import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { getPrefixType } from '../../type/get-type.util';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { OperatorExpressionTree } from '../operator-expression.tree';

export class PrefixExpressionTree extends OperatorExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx: PrefixExpressionContext) {
    super(ctx);
    this.value = getExpressionTree(ctx.expression());
  }

  public getType(): TypeTree {
    return getPrefixType(this.operator, this.value);
  }
}
