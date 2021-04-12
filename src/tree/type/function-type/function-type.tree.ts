import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  public parameters: TypeTree[];

  public returnType: TypeTree;

  public constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx._params.map(getTypeTree);
    this.returnType = getTypeTree(ctx._returnType);
    this.generics = [...this.parameters, this.returnType];
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof FunctionTypeTree &&
      this.returnType.equals(other.returnType) &&
      this.parameters.length === other.parameters.length &&
      this.parameters.every((x, i) => x.equals(other.parameters[i]))
    );
  }

  public replaceGenerics(genericsMap: Map<string, TypeTree> = new Map()): FunctionTypeTree {
    const type = new FunctionTypeTree();
    type.parameters = this.parameters.map((x) => x.replaceGenerics(genericsMap));
    type.returnType = this.returnType.replaceGenerics(genericsMap);
    type.generics = this.generics.map((x) => x.replaceGenerics(genericsMap));
    return type;
  }
}
