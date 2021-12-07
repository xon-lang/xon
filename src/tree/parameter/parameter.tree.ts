import { LambdaParameterContext, ParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  id: IdToken;
  type?: TypeTree;

  constructor(public ctx: ParameterContext | LambdaParameterContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.type = getTypeTree(ctx.type()) || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
    return this.id.toString();
  }
}
