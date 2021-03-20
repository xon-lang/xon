import { OperatorExpressionContext } from '../../../grammar/xon-parser';
import { getOperatorType } from '../../type/get-type.util';
import { TypeTree } from '../../type/type.tree';
import { getExpressionsTrees, getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class OperatorExpressionTree extends ExpressionTree {
  public operator: string;

  public value: ExpressionTree;

  public args: ExpressionTree[];

  public constructor(public ctx: OperatorExpressionContext) {
    super();

    this.operator = ctx
      .operator()
      .map((x) => x.text)
      .join('');

    this.value = getExpressionTree(ctx._value);
    this.args = getExpressionsTrees(ctx._args);
  }

  public getType(): TypeTree {
    return getOperatorType(this.operator, this.value, this.args);
  }
}
