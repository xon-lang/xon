import { TypeParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class TypeParameterTree extends BaseTree {
  id: IdToken;
  isArray: boolean;
  restrictionType: TypeTree;

  constructor(public ctx: TypeParameterContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.isArray = !!ctx.OPEN_BRACKET();
    this.restrictionType = getTypeTree(ctx.type()) || null;
  }

  toString(): string {
    return this.id.toString();
  }
}
