import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class LessThanExpressionTree extends BinaryExpressionTree {
  public ctx: RelationalExpressionContext;
}
