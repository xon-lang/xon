import { TupleTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class TupleTypeTree extends TypeTree {
  types: TypeTree[];

  constructor(public ctx: TupleTypeContext) {
    super();

    this.types = getTypesTrees(ctx.tupleParameters().type());
  }

  toString(): string {
    return `[${this.types.join(', ')}]`;
  }
}
