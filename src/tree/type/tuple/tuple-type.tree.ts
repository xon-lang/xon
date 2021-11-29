import { TupleTypeContext } from '../../../grammar/xon-parser';
import { TupleTypeMetadata } from '../../../metadata/type/tuple/tuple-type-metadata';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class TupleTypeTree extends TypeTree {
  metadata: TupleTypeMetadata;
  name: string;
  itemsTypes: TypeTree[];

  constructor(public ctx: TupleTypeContext) {
    super();

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.itemsTypes = ctx.type().map((x) => getTypeTree(x));
  }

  toString(): string {
    return `[${this.itemsTypes.join(', ')}]`;
  }
}
