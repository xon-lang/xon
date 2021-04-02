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

  public equals(other: TypeTree): boolean {
    return other instanceof PlainTypeTree && this.name === other.name;
  }

  public is(other: TypeTree): boolean {
    return !!(
      other.equals(typeAny) ||
      this.equals(other) ||
      (this.inheritance && this.inheritance.is(other))
    );
  }

  public toString(): string {
    return `${this.name}`;
  }
}
