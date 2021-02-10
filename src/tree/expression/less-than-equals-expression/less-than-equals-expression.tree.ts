import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class LessThanEqualsExpressionTree extends BinaryExpressionTree {
  ctx: RelationalExpressionContext;
}
