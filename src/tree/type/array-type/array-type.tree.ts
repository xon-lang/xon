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

  public equals(other: TypeTree): boolean {
    return other instanceof ArrayTypeTree && this.itemType.equals(other.itemType);
  }

  public is(other: TypeTree): boolean {
    return this.equals(other) || (this.inheritance && this.inheritance.is(other));
  }
}
