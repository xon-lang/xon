import {
  ArrayTypeContext,
  FunctionTypeContext,
  IdTypeContext,
  LiteralTypeContext,
  NullableTypeContext,
  ParenthesizedTypeContext,
  TupleTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array/array-type.tree';
import { FunctionTypeTree } from './function/function-type.tree';
import { IdTypeTree } from './id/id-type.tree';
import { LiteralTypeTree } from './literal/literal-type.tree';
import { NullableTypeTree } from './nullable/nullable-type.tree';
import { TupleTypeTree } from './tuple/tuple-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ParenthesizedTypeContext) return getTypeTree(ctx.type());

  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof IdTypeContext) return new IdTypeTree(ctx);
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);
  if (ctx instanceof TupleTypeContext) return new TupleTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);

  throw Error(`Type tree not found for "${ctx.constructor.name}"`);
};

export const getTypesTrees = (types?: TypeContext[]): TypeTree[] => types?.map(getTypeTree) || [];
