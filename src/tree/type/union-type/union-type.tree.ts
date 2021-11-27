import { UnionTypeContext } from '../../../grammar/xon-parser';
import { TypeMetadata } from '../../../metadata/type/type-metadata';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  metadata: TypeMetadata;
  name: string;
  types: TypeTree[];

  constructor(public ctx?: UnionTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.types = getTypesTrees(ctx.type());
  }

  toString(): string {
    return this.types.join(` ${this.ctx.OR().text} `);
  }
}
