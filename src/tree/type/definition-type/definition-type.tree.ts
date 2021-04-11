import { DefinitionTree } from '../../definition/definition.tree';
import { GenericTypeTree } from '../generic-type/generic-type.tree';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { createGenericType, createPlainType } from '../type-helper';
import { TypeTree } from '../type.tree';

export class DefinitionTypeTree extends TypeTree {
  public name: string;

  public parametersTypes: TypeTree[];

  public returnType: PlainTypeTree | GenericTypeTree;

  public constructor(public tree: DefinitionTree, public generics: TypeTree[]) {
    super();
    if (tree === undefined) throw new Error('Tree in undefined');
    if (generics.length !== tree.generics.length) throw new Error('Wrong generics count');

    this.name = tree.name;
    this.parametersTypes = tree.parameters.map((x) => x.dataType);
    this.returnType = generics.length
      ? createGenericType(this.name, generics)
      : createPlainType(tree.name);
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof DefinitionTypeTree &&
      this.name === other.name &&
      this.returnType.equals(other.returnType) &&
      this.parametersTypes.length === other.parametersTypes.length &&
      this.parametersTypes.every((x, i) => x.equals(other.parametersTypes[i])) &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x.equals(other.generics[i]))
    );
  }
}
