import { GenericTypeContext } from '../../../grammar/xon-parser';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { createPlainType, getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class GenericTypeTree extends TypeTree {
  public mainType: PlainTypeTree;

  public generics: TypeTree[];

  public constructor(public ctx?: GenericTypeContext) {
    super();
    if (!ctx) return;

    this.mainType = createPlainType(ctx.id().text);
    this.generics = getTypesTrees(ctx.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof GenericTypeTree &&
      this.mainType.equals(other) &&
      this.generics.every((x, i) => x.equals(other.generics[i]))
    );
  }

  public is(other: TypeTree): boolean {
    return (
      other instanceof GenericTypeTree &&
      this.mainType.is(other) &&
      this.generics.every((x, i) => x.is(other.generics[i]))
    );
  }
}
