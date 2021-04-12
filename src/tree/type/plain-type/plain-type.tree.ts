import { PlainTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class PlainTypeTree extends TypeTree {
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

  public replaceGenerics(genericsMap: Map<string, TypeTree> = new Map()): TypeTree {
    const type = new PlainTypeTree();
    type.name = this.name;
    type.generics = this.generics.map((x) => x.replaceGenerics(genericsMap));
    return type;
  }
}
