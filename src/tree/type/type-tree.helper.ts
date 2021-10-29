import {
  ArrayTypeContext,
  FunctionTypeContext,
  IdTypeContext,
  LiteralTypeContext,
  NullableTypeContext,
  ParenthesizedTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { IdTypeTree } from './id-type/id-type.tree';
import { LiteralTypeTree } from './literal-type/literal-type.tree';
import { NullableTypeTree } from './nullable-type/nullable-type.tree';
import { ParenthesizedTypeTree } from './parenthesized-type/parenthesized-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union-type/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof IdTypeContext) return new IdTypeTree(ctx);
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);
  if (ctx instanceof ParenthesizedTypeContext) return new ParenthesizedTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);

  throw Error(`Type tree not found for "${ctx.constructor.name}"`);
};

export const getTypesTrees = (types: TypeContext[]): TypeTree[] => types?.map(getTypeTree) || [];

export function createIdType(name: string, generics: TypeTree[] = []): IdTypeTree {
  const type = new IdTypeTree();
  type.name = name;
  type.genericArguments = generics;
  return type;
}

export function createParenthesizedType(baseType: TypeTree): ParenthesizedTypeTree {
  const type = new ParenthesizedTypeTree();
  type.baseType = baseType;
  type.genericArguments = [baseType];
  return type;
}

export function createArrayType(itemType: TypeTree): ArrayTypeTree {
  const type = new ArrayTypeTree();
  type.itemType = itemType;
  type.genericArguments = [itemType];
  return type;
}

export function createFunctionType(
  genericParameters: string[],
  parameters: TypeTree[],
  returnType: TypeTree,
): FunctionTypeTree {
  const type = new FunctionTypeTree();
  type.genericParameters = genericParameters;
  type.parameters = parameters;
  type.returnType = returnType;
  type.genericArguments = [...parameters, returnType];
  return type;
}

// export function createLiteralType(value: unknown): LiteralTypeTree {
//   const type = new LiteralTypeTree();
//   type.literal = value;
//   return type;
// }

export function createUnionType(types: TypeTree[]): UnionTypeTree {
  const type = new UnionTypeTree();
  type.types = types.filter((x) => x === types.find((z) => z.equals(x)));
  type.genericArguments = types;
  return type;
}

export function createNullableType(baseType: TypeTree): NullableTypeTree {
  const type = new NullableTypeTree();
  type.baseType = baseType;
  type.genericArguments = [baseType];
  return type;
}
