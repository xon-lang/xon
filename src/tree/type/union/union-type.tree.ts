import { UnionTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  types: TypeTree[];

  constructor(public ctx: UnionTypeContext) {
    super();

    this.types = getTypesTrees(ctx.type());
  }

  toString(): string {
    return this.types.join(` ${this.ctx.OR().text} `);
  }
}
