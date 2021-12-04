import {
  ArrayTypeContext,
  IdTypeContext,
  LambdaTypeContext,
  LiteralTypeContext,
  MetaTypeContext,
  NullableTypeContext,
  ParenthesizedTypeContext,
  TupleTypeContext,
  TypeContext,
  UnionTypeContext,
} from '../../grammar/xon-parser';
import { ArrayTypeTree } from './array/array-type.tree';
import { IdTypeTree } from './id/id-type.tree';
import { LambdaTypeTree } from './lambda/lambda-type.tree';
import { LiteralTypeTree } from './literal/literal-type.tree';
import { MetaTypeTree } from './meta/meta-type.tree';
import { NullableTypeTree } from './nullable/nullable-type.tree';
import { TupleTypeTree } from './tuple/tuple-type.tree';
import { TypeTree } from './type.tree';
import { UnionTypeTree } from './union/union-type.tree';

export const getTypeTree = (ctx: TypeContext): TypeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ParenthesizedTypeContext) return getTypeTree(ctx.type());

  if (ctx instanceof ArrayTypeContext) return new ArrayTypeTree(ctx);
  if (ctx instanceof IdTypeContext) return new IdTypeTree(ctx);
  if (ctx instanceof LambdaTypeContext) return new LambdaTypeTree(ctx);
  if (ctx instanceof LiteralTypeContext) return new LiteralTypeTree(ctx);
  if (ctx instanceof MetaTypeContext) return new MetaTypeTree(ctx);
  if (ctx instanceof NullableTypeContext) return new NullableTypeTree(ctx);
  if (ctx instanceof TupleTypeContext) return new TupleTypeTree(ctx);
  if (ctx instanceof UnionTypeContext) return new UnionTypeTree(ctx);

  throw Error(`Type tree not found for "${ctx.constructor.name}"`);
};

export const getTypesTrees = (contexts: TypeContext[]): TypeTree[] =>
  contexts?.map(getTypeTree) || [];
