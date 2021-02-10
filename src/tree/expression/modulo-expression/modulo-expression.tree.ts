import { MulDivModExpressionContext } from '../../../grammar/xon-parser';
import { BinaryExpressionTree } from '../binary-expression.tree';

export class ModuloExpressionTree extends BinaryExpressionTree {
  ctx: MulDivModExpressionContext;
}
