import { PlainTypeContext } from '../../../grammar/xon-parser';
import { createPlainType, getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class PlainTypeTree extends TypeTree {
  public constructor(public ctx?: PlainTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.generics = getTypesTrees(ctx.generics()?.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof PlainTypeTree &&
      this.name === other.name &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x.equals(other.generics[i]))
    );
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree>): TypeTree {
    if (genericsMap.has(this.name)) return genericsMap.get(this.name);
    return createPlainType(
      this.name,
      this.generics.map((x) => x.useGenericsMap(genericsMap)),
    );
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (type.name === this.name) return new Map([[type.name, type]]);

    if (type.generics.length !== this.generics.length)
      throw new Error(
        `Type "${type.name}" generics count is ${type.generics.length} but expected ${this.generics.length}`,
      );

    const entries = this.generics
      .map((x, i) => x.getGenericsMap(type.generics[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    return new Map<string, TypeTree>(entries);
  }

  public toString(): string {
    const generics = this.generics.map((x) => x.toString()).join(', ');
    if (this.generics.length) return `${this.name}<${generics}>`;
    return this.name;
  }
}
