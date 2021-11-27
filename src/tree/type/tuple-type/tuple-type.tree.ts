import { TupleTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class TupleTypeTree extends TypeTree {
  name: string;
  itemsTypes: TypeTree[];

  constructor(public ctx?: TupleTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.itemsTypes = ctx.type().map((x) => getTypeTree(x));
  }

  toString(): string {
    return `[${this.itemsTypes.join(', ')}]`;
  }
}
