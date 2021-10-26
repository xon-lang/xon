import { PlainTypeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { createPlainType, getTypesTrees } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class PlainTypeTree extends TypeTree {
  id: IdToken;

  public constructor(public ctx?: PlainTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.id = new IdToken(ctx._name);
    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof PlainTypeTree &&
      this.name === other.name &&
      this.genericArguments.length === other.genericArguments.length &&
      this.genericArguments.every((x, i) => x.equals(other.genericArguments[i]))
    );
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree>): TypeTree {
    if (genericsMap.has(this.name)) return genericsMap.get(this.name);
    return createPlainType(
      this.name,
      this.genericArguments.map((x) => x.useGenericsMap(genericsMap)),
    );
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (type.name === this.name) return new Map([[type.name, type]]);

    if (type.genericArguments.length !== this.genericArguments.length)
      throw new Error(
        `Type "${type.name}" generics count is ${type.genericArguments.length} but expected ${this.genericArguments.length}`,
      );

    const entries = this.genericArguments
      .map((x, i) => x.getGenericsMap(type.genericArguments[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    return new Map<string, TypeTree>(entries);
  }

  public toString(): string {
    const generics = this.genericArguments.join(', ');
    if (this.genericArguments.length) return `${this.name}<${generics}>`;
    return this.name;
  }
}
