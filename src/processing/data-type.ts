import { DefinitionTree } from '../tree/definition/definition.tree';
import { MemberTree } from '../tree/definition/member/member.tree';
import { findDefinition } from './definition-storage';

export class DataType {
  public isLiteral: boolean;

  public isArray: boolean;

  public members: MemberTree[];

  public constructor(
    public name: string,
    public generics: DataType[] = [],
    public parameters: DataType[] = [],
  ) {}

  // public static fromTypeTree(typeTree: TypeTree):DataType{
  //   if (tree instanceof PlainTypeTree) {
  //     const definition = findDefinition(tree.name);
  //     return new DataType(definition);
  //   }
  //   if (tree instanceof ArrayTypeTree) {
  //     const definition = findDefinition('Array');
  //     const itemDataType = resolveDataType(tree.itemType);
  //     return new DataType(definition, [itemDataType]);
  //   }
  //   if (tree instanceof GenericTypeTree) {
  //     const definition = findDefinition(tree.name);
  //     const generics = tree.generics.map(resolveDataType);
  //     return new DataType(definition, generics);
  //   }
  //   if (tree instanceof FunctionTypeTree) {
  //     const definition = findDefinition('Function');
  //     const generics = tree.generics.map(resolveDataType);
  //     return new DataType(definition, generics);
  //   }
  //   if (tree instanceof ActionTypeTree) return ;
  //   if (tree instanceof UnionTypeTree) return;
  //   if (tree instanceof LiteralTypeTree) return;
  //   if (tree instanceof NullableTypeTree) return;
  //   return null;
  // }

  public equals(other: DataType): boolean {
    return (
      this.name === other.name &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x === other.generics[i])
    );
  }

  public definition(): DefinitionTree {
    return findDefinition(this.name);
  }

  public getMemberType(name: string): DataType {
    return this.definition().members.find((x) => x.name === name)?.dataType;
  }
}
