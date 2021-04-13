import { ActionTypeContext } from '../../../grammar/xon-parser';
import { createActionType, getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ActionTypeTree extends TypeTree {
  public parameters: TypeTree[];

  public constructor(public ctx?: ActionTypeContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx._params.map(getTypeTree);
    this.generics = this.parameters;
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof ActionTypeTree &&
      this.parameters.length === other.parameters.length &&
      this.parameters.every((x, i) => x.equals(other.parameters[i]))
    );
  }

  public fromExplicitTypes(explicitTypes: Map<string, TypeTree> = new Map()): ActionTypeTree {
    const type = new ActionTypeTree();
    type.parameters = this.parameters.map((x) => x.fromExplicitTypes(explicitTypes));
    type.generics = this.generics.map((x) => x.fromExplicitTypes(explicitTypes));
    return type;
  }

  public fromImplicitType(implicitType: TypeTree): TypeTree {
    if (!(implicitType instanceof ActionTypeTree))
      throw new Error(`Type "${implicitType.name}" is not a "${this.name}" type`);

    if (implicitType.parameters.length !== this.parameters.length)
      throw new Error(
        `Type "${implicitType.name}" has ${implicitType.parameters.length} parameters but this type has ${this.parameters.length}`,
      );

    return createActionType(
      this.parameters.map((x, i) => x.fromImplicitType(implicitType.parameters[i])),
    );
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (!(type instanceof ActionTypeTree))
      throw new Error(`Type "${type.name}" is not a "${this.name}" type`);

    if (type.parameters.length !== this.parameters.length)
      throw new Error(
        `Type "${type.name}" has ${type.parameters.length} parameters but this type has ${this.parameters.length}`,
      );

    const entries = this.generics
      .map((x, i) => x.getGenericsMap(type.generics[i]).entries())
      .map((x) => Array.from(x))
      .flat();
    return new Map<string, TypeTree>(entries);
  }

  public toString(): string {
    const generics = this.generics.map((x) => x.toString()).join(', ');
    const parameters = this.parameters.map((x) => x.toString()).join(', ');
    return `${generics ? `<${generics}>` : ''}(${parameters})`;
  }
}
