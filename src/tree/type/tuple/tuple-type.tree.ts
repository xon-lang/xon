import { TupleTypeContext } from '../../../grammar/xon-parser';
import { TupleTypeMetadata } from '../../../metadata/type/tuple/tuple-type-metadata';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class TupleTypeTree extends TypeTree {
  metadata: TupleTypeMetadata;
  types: TypeTree[];

  constructor(public ctx: TupleTypeContext) {
    super();

    this.types = getTypesTrees(ctx.arrayParameters().type());
  }

  toString(): string {
    return `[${this.types.join(', ')}]`;
  }
}
