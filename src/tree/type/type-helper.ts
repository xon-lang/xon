import {
  ArrayTypeContext,
  FunctionTypeContext,
  GenericTypeContext,
  MetaTypeContext,
  ParenthesizedTypeContext,
  PlainTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ParameterTree } from '../parameter/parameter.tree';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { GenericTypeTree } from './generic-type/generic-type.tree';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union-type/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PlainTypeContext) return new PlainTypeTree(ctx);
  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof GenericTypeContext) return new GenericTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);
  if (ctx instanceof MetaTypeContext) {
    const type = getTypeTree(ctx.type());
    type.metaType = ctx.id().text;
    return type;
  }

  if (ctx instanceof ParenthesizedTypeContext) return getTypeTree(ctx.type());

  throw Error(`No Type found for ${ctx?.constructor?.name}`);
};

export const getTypesTrees = (ctx: TypeContext[]): TypeTree[] => ctx.map(getTypeTree);

export function createPlainType(name: string): PlainTypeTree {
  const type = new PlainTypeTree();
  type.name = name;
  return type;
}

export function createGenericType(mainType: PlainTypeTree, generics: TypeTree[]): GenericTypeTree {
  const type = new GenericTypeTree();
  type.mainType = mainType;
  type.generics = generics;
  return type;
}

export function createArrayType(itemType: TypeTree): ArrayTypeTree {
  const type = new ArrayTypeTree();
  type.itemType = itemType;
  return type;
}

export function createFunctionType(
  parametersTypes: ParameterTree[],
  returnType: TypeTree,
): FunctionTypeTree {
  const type = new FunctionTypeTree();
  type.parametersTypes = parametersTypes;
  type.returnType = returnType;
  return type;
}

export const typeAny = createPlainType('Any');
typeAny.inheritance = null;
