import { LogicalOrExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class LogicalOrExpressionTree extends BinaryExpressionTree {
  ctx: LogicalOrExpressionContext;
}
