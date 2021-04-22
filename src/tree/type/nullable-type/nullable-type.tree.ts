import { NullableTypeContext } from '../../../grammar/xon-parser';
import { createNullableType, getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class NullableTypeTree extends TypeTree {
  public baseType: TypeTree;

  public constructor(public ctx?: NullableTypeContext) {
    super();
    if (!ctx) return;

    this.baseType = getTypeTree(ctx.type());
    this.generics = [this.baseType];
  }

  public equals(other: TypeTree): boolean {
    return other instanceof NullableTypeTree && this.baseType.equals(other);
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree>): NullableTypeTree {
    return createNullableType(this.baseType.useGenericsMap(genericsMap));
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (type instanceof NullableTypeTree) return this.baseType.getGenericsMap(type.baseType);
    return this.baseType.getGenericsMap(type);
  }

  public toString(): string {
    return `${this.baseType.toString()}?`;
  }
}
