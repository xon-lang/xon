import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class MoreThanEqualsExpressionTree extends BinaryExpressionTree {
  ctx: RelationalExpressionContext;
}
