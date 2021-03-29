import { PlainTypeContext } from '../../../grammar/xon-parser';
import { typeAny } from '../type-helper';
import { TypeTree } from '../type.tree';

export class PlainTypeTree extends TypeTree {
  public name: string;

  public constructor(public ctx?: PlainTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
  }

  public equalsDataType(other: TypeTree): boolean {
    return other instanceof PlainTypeTree && this.name === other.name;
  }

  public is(other: TypeTree): boolean {
    return !!(
      other.equalsDataType(typeAny) ||
      this.equalsDataType(other) ||
      (this.inheritance && this.inheritance.is(other))
    );
  }
}
