import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  public generics: string[];

  public parametersTypes: TypeTree[];

  public returnType: TypeTree;

  public constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.generics =
      ctx
        .generics()
        ?.id()
        .map((x) => x.text) || [];
    this.parametersTypes = ctx._params.map(getTypeTree);
    this.returnType = getTypeTree(ctx._returnType);
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof FunctionTypeTree &&
      this.returnType.equals(other.returnType) &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x === other.generics[i]) &&
      this.parametersTypes.length === other.parametersTypes.length &&
      this.parametersTypes.every((x, i) => x.equals(other.parametersTypes[i]))
    );
  }
}
