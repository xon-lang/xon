import { UnionTypeContext } from '../../../grammar/xon-parser';
import { UnionTypeMetadata } from '../../../metadata/type/union/union-type-metadata';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  metadata: UnionTypeMetadata;
  name: string;
  types: TypeTree[];

  constructor(public ctx: UnionTypeContext) {
    super();

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.types = getTypesTrees(ctx.type());
  }

  toString(): string {
    return this.types.join(` ${this.ctx.OR().text} `);
  }
}
