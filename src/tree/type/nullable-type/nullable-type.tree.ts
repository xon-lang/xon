import { NullableTypeContext } from '../../../grammar/xon-parser';
import { ActionTypeTree } from '../action-type/action-type.tree';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { createNullableType, getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';
import { UnionTypeTree } from '../union-type/union-type.tree';

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

  public fromExplicitTypes(explicitTypes: Map<string, TypeTree> = new Map()): NullableTypeTree {
    const type = new NullableTypeTree();
    type.baseType = this.baseType.fromExplicitTypes(explicitTypes);
    type.generics = this.generics.map((x) => x.fromExplicitTypes(explicitTypes));
    return type;
  }

  public fromImplicitType(implicitType: TypeTree): TypeTree {
    if (implicitType instanceof NullableTypeTree)
      return createNullableType(this.baseType.fromImplicitType(implicitType.baseType));

    return createNullableType(this.baseType.fromImplicitType(implicitType));
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (type instanceof NullableTypeTree) return this.baseType.getGenericsMap(type.baseType);
    return this.baseType.getGenericsMap(type);
  }

  public toString(): string {
    if (
      this.baseType instanceof ActionTypeTree ||
      this.baseType instanceof FunctionTypeTree ||
      this.baseType instanceof UnionTypeTree
    ) {
      const baseType = `(${this.baseType.toString()})`;
      return `${baseType}?`;
    }
    return `${this.baseType.toString()}?`;
  }
}
