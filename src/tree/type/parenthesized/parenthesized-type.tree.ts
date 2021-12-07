import { ParenthesizedTypeContext } from '../../../grammar/xon-parser';
import { TypeMetadata } from '../../../metadata/type/type-metadata';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class ParenthesizedTypeTree extends TypeTree {
  metadata: TypeMetadata;
  type: TypeTree;

  constructor(public ctx: ParenthesizedTypeContext) {
    super();

    this.type = getTypeTree(ctx.type());
  }

  toString(): string {
    return `(${this.type})`;
  }
}
