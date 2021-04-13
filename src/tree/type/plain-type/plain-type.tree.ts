import { PlainTypeContext } from '../../../grammar/xon-parser';
import { createPlainType, getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class PlainTypeTree extends TypeTree {
  public isGeneric: boolean;

  public constructor(public ctx?: PlainTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.generics = getTypesTrees(ctx.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof PlainTypeTree &&
      this.name === other.name &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x.equals(other.generics[i]))
    );
  }

  public markGenerics(generics: string[]): void {
    if (this.generics.length) super.markGenerics(generics);
    else if (generics.includes(this.name)) this.isGeneric = true;
  }

  public fromExplicitTypes(explicitTypes: Map<string, TypeTree> = new Map()): TypeTree {
    return createPlainType(
      this.name,
      this.generics.map((x) => x.fromExplicitTypes(explicitTypes)),
    );
  }

  public fromImplicitType(implicitType: TypeTree): TypeTree {
    if (this.isGeneric) return implicitType;
    if (implicitType.name !== this.name)
      throw new Error(`Type "${implicitType.name}" is not "${this.name}"`);

    if (implicitType.generics.length !== this.generics.length)
      throw new Error(
        `Type "${implicitType.name}" generics count is ${implicitType.generics.length} but expected ${this.generics.length}`,
      );

    return createPlainType(
      this.name,
      this.generics.map((x) => x.fromImplicitType(implicitType)),
    );
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (this.isGeneric) return new Map([[type.name, type]]);

    if (type.name !== this.name) throw new Error(`Type "${type.name}" is not "${this.name}"`);

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
    return `${this.name}${generics ? `<${generics}>` : ''}`;
  }
}
