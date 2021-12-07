import { NullableTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class NullableTypeTree extends TypeTree {
  innerType: TypeTree;

  constructor(public ctx: NullableTypeContext) {
    super();

    this.innerType = getTypeTree(ctx.type());
  }

  toString(): string {
    return `${this.innerType}?`;
  }
}
