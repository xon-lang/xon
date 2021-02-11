import { PowExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class PowExpressionTree extends BinaryExpressionTree {
  public ctx: PowExpressionContext;
}
