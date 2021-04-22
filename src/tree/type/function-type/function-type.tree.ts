import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { createFunctionType, getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  public declaredGenerics: string[] = [];

  public parameters: TypeTree[] = [];

  public returnType: TypeTree;

  public constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.declaredGenerics =
      ctx
        .declaredGenerics()
        ?.DEFINITION_ID()
        .map((x) => x.text) || [];
    this.parameters = ctx.typeParameters().type().map(getTypeTree);
    this.returnType = getTypeTree(ctx.type());
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

  public useGenericsMap(genericsMap: Map<string, TypeTree> = new Map()): FunctionTypeTree {
    return createFunctionType(
      this.declaredGenerics,
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

    const entries = this.generics
      .map((x, i) => x.getGenericsMap(type.generics[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    return new Map<string, TypeTree>([...entries]);
  }

  public toString(): string {
    const declaredGenerics = this.declaredGenerics?.join(', ');
    const parameters = this.parameters.map((x) => x.toString()).join(', ');
    const returnType = this.returnType.toString();

    return `${declaredGenerics ? `<${declaredGenerics}>` : ''}(${parameters}) ${returnType}`;
  }
}
