import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { createArrayType, getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';
import { UnionTypeTree } from '../union-type/union-type.tree';

export class ArrayTypeTree extends TypeTree {
  public itemType: TypeTree;

  public constructor(public ctx?: ArrayTypeContext) {
    super();
    if (!ctx) return;

    this.itemType = getTypeTree(ctx.type());
    this.genericArguments = [this.itemType];
  }

  public equals(other: TypeTree): boolean {
    return other instanceof ArrayTypeTree && this.itemType.equals(other.itemType);
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree>): ArrayTypeTree {
    return createArrayType(this.itemType.useGenericsMap(genericsMap));
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (!(type instanceof ArrayTypeTree))
      throw new Error(`Type "${type.name}" is not an "${this.name}" type`);

    const entries = this.genericArguments
      .map((x, i) => x.getGenericsMap(type.genericArguments[i]).entries())
      .map((x) => Array.from(x))
      .flat();
    return new Map<string, TypeTree>(entries);
  }

  public toString(): string {
    if (this.itemType instanceof FunctionTypeTree || this.itemType instanceof UnionTypeTree) {
      const itemType = `(${this.itemType.toString()})`;
      return `${itemType}[]`;
    }
    return `${this.itemType.toString()}[]`;
  }
}
