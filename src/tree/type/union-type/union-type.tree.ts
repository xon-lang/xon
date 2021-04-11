import { UnionTypeContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  public dataTypes: TypeTree[];

  public constructor(public ctx?: UnionTypeContext) {
    super();
    if (!ctx) return;

    this.dataTypes = getTypesTrees(ctx.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof UnionTypeTree &&
      this.dataTypes.length === other.dataTypes.length &&
      this.dataTypes.every((x, i) => x.equals(other.dataTypes[i]))
    );
  }
}
