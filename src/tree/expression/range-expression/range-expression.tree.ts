import { RangeExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class RangeExpressionTree extends BinaryExpressionTree {
  public ctx: RangeExpressionContext;
}
