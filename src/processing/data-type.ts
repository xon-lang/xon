/* eslint-disable no-param-reassign */
import { DefinitionTree } from '../tree/definition/definition.tree';
import { MethodMemberTree } from '../tree/definition/member/method-member/method-member.tree';
import { PropertyMemberTree } from '../tree/definition/member/property-member/property-member.tree';
import { ActionTypeTree } from '../tree/type/action-type/action-type.tree';
import { ArrayTypeTree } from '../tree/type/array-type/array-type.tree';
import { FunctionTypeTree } from '../tree/type/function-type/function-type.tree';
import { NullableTypeTree } from '../tree/type/nullable-type/nullable-type.tree';
import { PlainTypeTree } from '../tree/type/plain-type/plain-type.tree';
import { createFunctionType } from '../tree/type/type-helper';
import { TypeTree } from '../tree/type/type.tree';
import { UnionTypeTree } from '../tree/type/union-type/union-type.tree';
import { findDefinition } from '../type/definition-storage';

export class DataType {
  public isLiteral: boolean;

  public isArray: boolean;

  public isDefinition: boolean;

  public definition: DefinitionTree;

  public genericsMap: Map<string, DataType>;

  public constructor(public name: string, public generics: DataType[] = []) {
    this.definition = findDefinition(name);

    if (generics.length !== this.definition.generics.length)
      throw new Error(`Wrong generics count for ${name}`);

    this.genericsMap = new Map(this.definition.generics.map((x, i) => [x, generics[i]]));
  }

  // generics should be resolved before
  public static fromTypeTree(tree: TypeTree): DataType {
    if (tree instanceof PlainTypeTree)
      return new DataType(
        tree.name,
        tree.generics.map((x) => DataType.fromTypeTree(x)),
      );

    if (tree instanceof ArrayTypeTree)
      return new DataType('Array', [DataType.fromTypeTree(tree.itemType)]);

    if (tree instanceof FunctionTypeTree) {
      return new DataType('Function', [
        ...tree.parameters.map((x) => DataType.fromTypeTree(x)),
        DataType.fromTypeTree(tree.returnType),
      ]);
    }

    if (tree instanceof ActionTypeTree)
      return new DataType('Action', [...tree.parameters.map((x) => DataType.fromTypeTree(x))]);

    if (tree instanceof UnionTypeTree)
      return new DataType('Action', [...tree.types.map((x) => DataType.fromTypeTree(x))]);

    // if (tree instanceof LiteralTypeTree)
    // return new DataType('Action', [
    //   ...tree.parameters.map((x) => DataType.fromTypeTree(x)),
    // ]);

    if (tree instanceof NullableTypeTree)
      return new DataType('Nullable', [DataType.fromTypeTree(tree.type)]);

    throw new Error('Could not convert type tree to data type');
  }

  public equals(other: DataType): boolean {
    return (
      this.name === other.name &&
      this.generics.length === other.generics.length &&
      this.generics.every((x, i) => x === other.generics[i])
    );
  }

  public getMemberType(
    memberName: string,
    // should be resolved
    generics: DataType[] = [],
    actualArguments: DataType[] = [],
  ): DataType {
    const member = this.definition.members.find((x) => x.name === memberName);
    if (!member) throw new Error(`Member "${memberName}" not found`);

    if (member instanceof PropertyMemberTree) {
      if (generics.length) throw new Error(`Property "${member.name}" has no generics`);
      return DataType.fromTypeTree(member.typeTree);
    }
    if (member instanceof MethodMemberTree) {
      if (generics.length && generics.length !== member.generics.length)
        throw new Error(`Wrong generics count for index method "${this.name}"`);

      const genericsMap = new Map(this.genericsMap.entries());
      if (generics.length) {
        member.generics
          .map((x, i) => ({ name: x, type: generics[i] }))
          .forEach((x) => genericsMap.set(x.name, x.type));
      }

      return new DataType('Function', [
        ...member.parameters
          .map((x) => x.typeTree.replaceGenerics(genericsMap))
          .map((x) => DataType.fromTypeTree(x)),
      ]);
    }
  }

  public toTypeTree(): TypeTree {
    if (this.name === 'Function')
      createFunctionType(
        this.generics.slice(0, -1).map((x) => x.toTypeTree()),
        this.generics[this.generics.length - 1].toTypeTree(),
      );
  }
}
