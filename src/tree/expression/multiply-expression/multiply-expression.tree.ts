import { MulDivModExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class MultiplyExpressionTree extends BinaryExpressionTree {
  public ctx: MulDivModExpressionContext;
}
