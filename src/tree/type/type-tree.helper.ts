import {
  ArrayTypeContext,
  FunctionParenthesizedTypeContext,
  FunctionTypeContext,
  IdTypeContext,
  IndexParenthesizedTypeContext,
  IndexTypeContext,
  LiteralTypeContext,
  NullableTypeContext,
  TypeContext,
  UnionParenthesizedTypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { IdTypeTree } from './id-type/id-type.tree';
import { IndexTypeTree } from './index-type/index-type.tree';
import { LiteralTypeTree } from './literal-type/literal-type.tree';
import { NullableTypeTree } from './nullable-type/nullable-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union-type/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof FunctionParenthesizedTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof IdTypeContext) return new IdTypeTree(ctx);
  if (ctx instanceof IndexParenthesizedTypeContext) return new IndexTypeTree(ctx);
  if (ctx instanceof IndexTypeContext) return new IndexTypeTree(ctx);
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);
  if (ctx instanceof UnionParenthesizedTypeContext) return new UnionTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);

  throw Error(`Type tree not found for "${ctx.constructor.name}"`);
};

export const getTypesTrees = (types: TypeContext[]): TypeTree[] => types?.map(getTypeTree) || [];
