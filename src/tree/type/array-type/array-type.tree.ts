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

  public replaceGenerics(map: Map<string, TypeTree> = new Map()): ArrayTypeTree {
    const type = new ArrayTypeTree();
    type.itemType = this.itemType.replaceGenerics(map);
    return type;
  }
}
