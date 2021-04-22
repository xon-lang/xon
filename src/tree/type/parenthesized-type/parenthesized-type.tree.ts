import { ParenthesizedTypeContext } from '../../../grammar/xon-parser';
import { createParenthesizedType, getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class ParenthesizedTypeTree extends TypeTree {
  public baseType: TypeTree;

  public constructor(public ctx?: ParenthesizedTypeContext) {
    super();
    if (!ctx) return;

    this.baseType = getTypeTree(ctx.type());
    this.generics = [this.baseType];
  }

  public equals(other: TypeTree): boolean {
    return other instanceof ParenthesizedTypeTree && this.baseType.equals(other);
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree>): ParenthesizedTypeTree {
    return createParenthesizedType(this.baseType.useGenericsMap(genericsMap));
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    return this.baseType.getGenericsMap(type);
  }

  public toString(): string {
    return `(${this.baseType.toString()})`;
  }
}
