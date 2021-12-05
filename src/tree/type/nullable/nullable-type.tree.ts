import { NullableTypeContext } from '../../../grammar/xon-parser';
import { NullableTypeMetadata } from '../../../metadata/type/nullable/nullable-type-metadata';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class NullableTypeTree extends TypeTree {
  metadata: NullableTypeMetadata;
  type: TypeTree;

  constructor(public ctx: NullableTypeContext) {
    super();

    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    return `${this.type}?`;
  }
}
