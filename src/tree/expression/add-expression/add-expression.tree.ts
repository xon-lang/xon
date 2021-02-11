import { AddSubExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class AddExpressionTree extends BinaryExpressionTree {
  public ctx: AddSubExpressionContext;
}
