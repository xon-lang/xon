import { UnionTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  name: string;
  types: TypeTree[];

  constructor(public ctx?: UnionTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.types = getTypesTrees(ctx.type());
  }

  toString(): string {
    return this.types.join(' | ');
  }
}
