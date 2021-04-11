import {
  ActionTypeContext,
  ArrayTypeContext,
  FunctionTypeContext,
  LiteralTypeContext,
  NullableTypeContext,
  ParenthesizedTypeContext,
  PlainTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ActionTypeTree } from './action-type/action-type.tree';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { LiteralTypeTree } from './literal-type/literal-type.tree';
import { NullableTypeTree } from './nullable-type/nullable-type.tree';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union-type/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PlainTypeContext) return new PlainTypeTree(ctx);
  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof ActionTypeContext) return new ActionTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);

  if (ctx instanceof ParenthesizedTypeContext) return getTypeTree(ctx.type());

  throw Error(`No Type found for ${ctx?.constructor?.name}`);
};

export const getTypesTrees = (ctx: TypeContext[]): TypeTree[] => ctx?.map(getTypeTree) || [];

export function createPlainType(name: string, generics: TypeTree[]): PlainTypeTree {
  const type = new PlainTypeTree();
  type.name = name;
  type.generics = generics;
  return type;
}

export function createArrayType(itemType: TypeTree): ArrayTypeTree {
  const type = new ArrayTypeTree();
  type.itemType = itemType;
  return type;
}

export function createFunctionType(parameters: TypeTree[], returnType: TypeTree): FunctionTypeTree {
  const type = new FunctionTypeTree();
  type.parameters = parameters;
  type.returnType = returnType;
  return type;
}

export function createUnionType(types: TypeTree[]): UnionTypeTree {
  const type = new UnionTypeTree();
  type.types = types.filter((x) => x === types.find((z) => z.equals(x)));
  return type;
}

export function createNullableType(baseType: TypeTree): NullableTypeTree {
  const type = new NullableTypeTree();
  type.type = baseType;
  return type;
}
