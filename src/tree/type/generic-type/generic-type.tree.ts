import { GenericTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class GenericTypeTree extends TypeTree {
  public name: string;

  public generics: TypeTree[];

  public constructor(public ctx?: GenericTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.generics = getTypesTrees(ctx.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof GenericTypeTree &&
      this.name === other.name &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x.equals(other.generics[i]))
    );
  }
}
