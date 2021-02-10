import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class MoreThanExpressionTree extends BinaryExpressionTree {
  ctx: RelationalExpressionContext;
}
