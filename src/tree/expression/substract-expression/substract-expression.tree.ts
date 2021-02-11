import { AddSubExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class SubstractExpressionTree extends BinaryExpressionTree {
  public ctx: AddSubExpressionContext;
}
