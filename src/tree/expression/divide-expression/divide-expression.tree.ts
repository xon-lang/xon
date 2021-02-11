import { MulDivModExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class DivideExpressionTree extends BinaryExpressionTree {
  public ctx: MulDivModExpressionContext;
}
