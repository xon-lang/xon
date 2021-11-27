import { IsExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class IsExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  expression: ExpressionTree;
  type: TypeTree;

  constructor(public ctx: IsExpressionContext) {
    super();

    this.expression = getExpressionTree(ctx.expression());
    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    return `${this.expression} ${this.ctx.IS().text} ${this.type}`;
  }
}
