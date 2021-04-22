import {
  ArrayTypeContext,
  FunctionTypeContext,
  LiteralTypeContext,
  NullableTypeContext,
  ParenthesizedTypeContext,
  PlainTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { LiteralTypeTree } from './literal-type/literal-type.tree';
import { NullableTypeTree } from './nullable-type/nullable-type.tree';
import { ParenthesizedTypeTree } from './parenthesized-type/parenthesized-type.tree';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union-type/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);
  if (ctx instanceof ParenthesizedTypeContext) return new ParenthesizedTypeTree(ctx);
  if (ctx instanceof PlainTypeContext) return new PlainTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);

  throw Error(`Type tree not found for "${ctx?.constructor?.name}"`);
};

export const getTypesTrees = (ctx: TypeContext[]): TypeTree[] => ctx?.map(getTypeTree) || [];

export function createPlainType(name: string, generics: TypeTree[] = []): PlainTypeTree {
  const type = new PlainTypeTree();
  type.name = name;
  type.generics = generics;
  return type;
}

export function createParenthesizedType(baseType: TypeTree): ParenthesizedTypeTree {
  const type = new ParenthesizedTypeTree();
  type.baseType = baseType;
  type.generics = [baseType];
  return type;
}

export function createArrayType(itemType: TypeTree): ArrayTypeTree {
  const type = new ArrayTypeTree();
  type.itemType = itemType;
  type.generics = [itemType];
  return type;
}

export function createFunctionType(
  declaredGenerics: string[],
  parameters: TypeTree[],
  returnType: TypeTree,
): FunctionTypeTree {
  const type = new FunctionTypeTree();
  type.declaredGenerics = declaredGenerics;
  type.parameters = parameters;
  type.returnType = returnType;
  type.generics = [...parameters, returnType];
  return type;
}

export function createLiteralType(value: unknown): LiteralTypeTree {
  const type = new LiteralTypeTree();
  type.value = value;
  return type;
}

export function createUnionType(types: TypeTree[]): UnionTypeTree {
  const type = new UnionTypeTree();
  type.types = types.filter((x) => x === types.find((z) => z.equals(x)));
  type.generics = types;
  return type;
}

export function createNullableType(baseType: TypeTree): NullableTypeTree {
  const type = new NullableTypeTree();
  type.baseType = baseType;
  type.generics = [baseType];
  return type;
}
