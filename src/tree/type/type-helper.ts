import {
  ArrayTypeContext,
  FunctionTypeContext,
  GenericTypeContext,
  LiteralTypeContext,
  ParenthesizedTypeContext,
  PlainTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { GenericTypeTree } from './generic-type/generic-type.tree';
import { LiteralTypeTree } from './literal-type/literal-type.tree';
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
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);

  if (ctx instanceof ParenthesizedTypeContext) return getTypeTree(ctx.type());

  throw Error(`No Type found for ${ctx?.constructor?.name}`);
};

export const getTypesTrees = (ctx: TypeContext[]): TypeTree[] => ctx?.map(getTypeTree) || [];
