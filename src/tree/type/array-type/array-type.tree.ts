import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ArrayTypeTree extends TypeTree {
  public itemType: TypeTree;

  public constructor(public ctx?: ArrayTypeContext) {
    super();
    if (!ctx) return;

    this.itemType = getTypeTree(ctx.type());
  }

  public equalsDataType(other: TypeTree): boolean {
    return other instanceof ArrayTypeTree && this.itemType.equalsDataType(other.itemType);
  }

  public is(other: TypeTree): boolean {
    return this.equalsDataType(other) || (this.inheritance && this.inheritance.is(other));
  }
}
