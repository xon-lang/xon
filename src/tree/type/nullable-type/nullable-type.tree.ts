import { NullableTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class NullableTypeTree extends TypeTree {
  public type: TypeTree;

  public constructor(public ctx?: NullableTypeContext) {
    super();
    if (!ctx) return;

    this.type = getTypeTree(ctx.type());
    this.generics = [this.type];
  }

  public equals(other: TypeTree): boolean {
    return other instanceof NullableTypeTree && this.type.equals(other);
  }

  public replaceGenerics(genericsMap: Map<string, TypeTree> = new Map()): NullableTypeTree {
    const type = new NullableTypeTree();
    type.type = this.type.replaceGenerics(genericsMap);
    type.generics = this.generics.map((x) => x.replaceGenerics(genericsMap));
    return type;
  }
}
