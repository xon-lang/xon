import { IntersectionTypeContext } from '../../../grammar/xon-parser';
import { IntersectionTypeMetadata } from '../../../metadata/type/intersection/intersection-type-metadata';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IntersectionTypeTree extends TypeTree {
  metadata: IntersectionTypeMetadata;
  types: TypeTree[];

  constructor(public ctx: IntersectionTypeContext) {
    super();

    this.types = getTypesTrees(ctx.type());
  }

  toString(): string {
    return this.types.join(` ${this.ctx.AND().text} `);
  }
}
