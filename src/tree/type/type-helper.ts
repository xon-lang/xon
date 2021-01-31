import {
  ArrayTypeContext,
  FunctionTypeContext,
  ObjectTypeContext,
  SimpleTypeContext,
  TypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './fucntion-type/function-type.tree';
import { ObjectTypeTree } from './object-type/object-type.tree';
import { SimpleTypeTree } from './simple-type/simple-type.tree';
import { TypeTree } from './type.tree';

export function getTypeTree(ctx: TypeContext): TypeTree {
  if (ctx === undefined) return undefined;

  if (ctx instanceof SimpleTypeContext) return new SimpleTypeTree(ctx);
  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof ObjectTypeContext) return new ObjectTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);

  throw Error(`No Statemenet found for ${ctx.constructor.name}`);
}

export function getTypesTree(types: TypeContext[]): TypeTree[] {
  return types?.map(getTypeTree) || [];
}

export function createSimpleTreeType(name: string): SimpleTypeTree {
  const type = new SimpleTypeTree();
  type.name = name;
  return type;
}

export function createArrayTreeType(baseType: TypeTree): ArrayTypeTree {
  const type = new ArrayTypeTree();
  type.baseType = baseType;
  return type;
}

export function createObjectTreeType(items: { name: string; type: TypeTree }[]): ObjectTypeTree {
  const type = new ObjectTypeTree();
  type.items = items;
  return type;
}

export function createFunctionTreeType(args: TypeTree[], returnType: TypeTree): FunctionTypeTree {
  const type = new FunctionTypeTree();
  type.args = args;
  type.returnType = returnType;
  return type;
}
