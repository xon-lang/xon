import { LogicalAndExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class LogicalAndExpressionTree extends BinaryExpressionTree {
  ctx: LogicalAndExpressionContext;
}
