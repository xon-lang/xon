import { EqualityExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class NotEqualsExpressionTree extends BinaryExpressionTree {
  public ctx: EqualityExpressionContext;
}
