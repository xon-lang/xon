import { PlainTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class PlainTypeTree extends TypeTree {
  public name: string;

  public generics: TypeTree[];

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

  public replaceGenerics(map: Map<string, TypeTree> = new Map()): TypeTree {
    if (map.has(this.name)) {
      if (this.generics.length) throw new Error('Generic type must not generics');
      return map.get(this.name);
    }
    const type = new PlainTypeTree();
    type.name = this.name;
    type.generics = this.generics.map((x) => x.replaceGenerics(map));
    return type;
  }
}
