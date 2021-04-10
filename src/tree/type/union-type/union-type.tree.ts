import { UnionTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  public types: TypeTree[];

  public constructor(public ctx?: UnionTypeContext) {
    super();
    if (!ctx) return;

    this.types = getTypesTrees(ctx.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof UnionTypeTree &&
      this.types.length === other.types.length &&
      this.types.every((x, i) => x.equals(other.types[i]))
    );
  }
}
