import { ActionTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ActionTypeTree extends TypeTree {
  public generics: string[];

  public parametersTypes: TypeTree[];

  public constructor(public ctx?: ActionTypeContext) {
    super();
    if (!ctx) return;

    this.generics =
      ctx
        .generics()
        ?.id()
        .map((x) => x.text) || [];
    this.parametersTypes = ctx._params.map(getTypeTree);
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof ActionTypeTree &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x === other.generics[i]) &&
      this.parametersTypes.length === other.parametersTypes.length &&
      this.parametersTypes.every((x, i) => x.equals(other.parametersTypes[i]))
    );
  }
}
