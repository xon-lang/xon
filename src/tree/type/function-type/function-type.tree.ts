import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  public parametersTypes: ParameterTree[];

  public returnType: TypeTree;

  public constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.parametersTypes = ctx.parameter().map((x) => new ParameterTree(x));
    this.returnType = getTypeTree(ctx.type());
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof FunctionTypeTree &&
      this.returnType.equals(other.returnType) &&
      this.parametersTypes.every((x, i) => x.getType().equals(other.parametersTypes[i].getType()))
    );
  }

  public is(other: TypeTree): boolean {
    return (
      other instanceof FunctionTypeTree &&
      this.returnType.is(other.returnType) &&
      this.parametersTypes.every((x, i) => x.getType().is(other.parametersTypes[i].getType()))
    );
  }

  public toString(): string {
    return `(${this.parametersTypes
      .map((x) => x.getType().toString())
      .join(', ')}) ${this.returnType.toString()}`;
  }
}
