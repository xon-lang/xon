import { ArgumentContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';

export class ArgumentTree extends BaseTree {
  public value: ExpressionTree;

  public constructor(public ctx?: ArgumentContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    throw new Error(`toString not implemented for "${this.constructor.name}"`);
  }
}
