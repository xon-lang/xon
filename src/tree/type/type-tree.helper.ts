import {
  ArrayTypeContext,
  FunctionTypeContext,
  IdTypeContext,
  IndexerTypeContext,
  NullableTypeContext,
  ParenthesizedTypeContext,
  TupleTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array-type/array-type.tree';
import { FunctionTypeTree } from './function-type/function-type.tree';
import { IdTypeTree } from './id-type/id-type.tree';
import { IndexerTypeTree } from './indexer-type/indexer-type.tree';
import { NullableTypeTree } from './nullable-type/nullable-type.tree';
import { TupleTypeTree } from './tuple-type/tuple-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union-type/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof FunctionTypeContext) return new FunctionTypeTree(ctx);
  if (ctx instanceof IdTypeContext) return new IdTypeTree(ctx);
  if (ctx instanceof IndexerTypeContext) return new IndexerTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);
  if (ctx instanceof ParenthesizedTypeContext) return getTypeTree(ctx.type());
  if (ctx instanceof TupleTypeContext) return new TupleTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);

  throw Error(`Type tree not found for "${ctx.constructor.name}"`);
};

export const getTypesTrees = (types?: TypeContext[]): TypeTree[] => types?.map(getTypeTree) || [];
