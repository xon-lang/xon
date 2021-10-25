import { ArgumentContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { IdToken } from '../id-token';

export class ArgumentTree extends BaseTree {
  public id?: IdToken;
  public value: ExpressionTree;

  public constructor(public ctx?: ArgumentContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
    this.id = ctx._name && new IdToken(ctx._name);
  }

  public toString(): string {
    throw new Error(`toString not implemented for "${this.constructor.name}"`);
  }
}
