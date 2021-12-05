import { ParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  id?: IdToken;
  type?: TypeTree;

  constructor(public ctx: ParameterContext) {
    super();

    this.id = (ctx.id() && IdToken.fromContext(ctx.id())) || null;
    this.type = getTypeTree(ctx.type()) || null;
  }

  toString(): string {
    if (this.id && this.type) return `${this.id} ${this.type}`;

    if (this.id) return this.id.toString();
    return this.type.toString();
  }
}
