import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { createFunctionType, getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  public genericParameters: string[] = [];

  public parameters: TypeTree[] = [];

  public returnType: TypeTree;

  public constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = ctx.typeParameters().type().map(getTypeTree);
    this.returnType = getTypeTree(ctx.type());
    this.genericArguments = [...this.parameters, this.returnType];
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof FunctionTypeTree &&
      this.returnType.equals(other.returnType) &&
      this.parameters.length === other.parameters.length &&
      this.parameters.every((x, i) => x.equals(other.parameters[i]))
    );
  }

  public useGenericsMap(genericsMap: Map<string, TypeTree> = new Map()): FunctionTypeTree {
    return createFunctionType(
      this.genericParameters,
      this.parameters.map((x) => x.useGenericsMap(genericsMap)),
      this.returnType.useGenericsMap(genericsMap),
    );
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (!(type instanceof FunctionTypeTree))
      throw new Error(`Type "${type.name}" is not a "${this.name}" type`);

    if (type.parameters.length !== this.parameters.length)
      throw new Error(
        `Type "${type.name}" has ${type.parameters.length} parameters but this type has ${this.parameters.length}`,
      );

    const entries = this.genericArguments
      .map((x, i) => x.getGenericsMap(type.genericArguments[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    return new Map<string, TypeTree>([...entries]);
  }

  public toString(): string {
    const genericParameters = this.genericParameters?.join(', ');
    const parameters = this.parameters.join(', ');
    const returnType = this.returnType;
    return `${genericParameters ? `<${genericParameters}>` : ''}(${parameters}) ${returnType}`;
  }
}
