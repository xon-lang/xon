import { TypeParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { IdToken } from '../id-token';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class TypeParameterTree extends BaseTree {
  hasSpread: boolean;
  id: IdToken;
  typeRestrict: TypeTree;
  metaRestrict: string;

  constructor(public ctx?: TypeParameterContext) {
    super();
    if (!ctx) return;

    this.hasSpread = !!ctx.SPREAD();
    this.id = new IdToken(ctx._name);
    this.typeRestrict = getTypeTree(ctx.type()) || null;
    this.metaRestrict = ctx._meta?.text || null;
  }

  toString(): string {
    if (this.hasSpread) return `...${this.id}`;
    return `${this.id}`;
  }
}
