/* eslint-disable @typescript-eslint/dot-notation */
import { ExpressionContext } from '../../grammar/xon-parser';
import { ExpressionTree } from './expression.tree';

export abstract class OperatorExpressionTree extends ExpressionTree {
  public operator: string;

  public constructor(public ctx: ExpressionContext) {
    super();

    this.operator = ctx['operator']()
      .map((x) => x.text)
      .join('');
  }
}
