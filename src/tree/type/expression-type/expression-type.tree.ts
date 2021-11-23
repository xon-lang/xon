import { ExpressionTypeContext } from '../../../grammar/xon-parser';
import { evalExpression } from '../../eval';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { TypeTree } from '../type.tree';

export class ExpressionTypeTree extends TypeTree {
  name: string;
  expression: ExpressionTree;

  constructor(public ctx?: ExpressionTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): string {
    const value = evalExpression(this.expression);
    if (typeof value === 'string') return `"${value}"`;
    return value.toString();
  }
}
