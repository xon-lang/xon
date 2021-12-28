/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  AddSubExpressionContext,
  ArrayExpressionContext,
  ConjunctionExpressionContext,
  DisjunctionExpressionContext,
  EqualityExpressionContext,
  ExprContext,
  IdExpressionContext,
  IndexExpressionContext,
  InfixExpressionContext,
  InvokeExpressionContext,
  LiteralExpressionContext,
  MemberExpressionContext,
  MethodExpressionContext,
  MulDivModExpressionContext,
  NullableExpressionContext,
  ParenthesizedExpressionContext,
  PowExpressionContext,
  PrefixExpressionContext,
  RangeExpressionContext,
  RelationalExpressionContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { IdToken } from '../../util/id-token';
import { ArrayExpressionTree } from './array/array-expression-tree';
import { ExpressionTree } from './expression-tree';
import { IdExpressionTree } from './id/id-expression-tree';
import { IndexExpressionTree } from './index/index-expression-tree';
import { InfixExpressionTree } from './infix/infix-expression-tree';
import { InvokeExpressionTree } from './invoke/invoke-expression-tree';
import { LiteralExpressionTree } from './literal/literal-expression-tree';
import { MemberExpressionTree } from './member/member-expression-tree';
import { MethodExpressionTree } from './method/method-expression-tree';
import { NullableExpressionTree } from './nullable/nullable-expression-tree';
import { ParenthesizedExpressionTree } from './parenthesized/parenthesized-expression-tree';
import { PrefixExpressionTree } from './prefix/prefix-expression-tree';

export const getExpressionTree = (ctx: ExprContext): ExpressionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof MethodExpressionContext) return new MethodExpressionTree(ctx);
  if (ctx instanceof NullableExpressionContext) return new NullableExpressionTree(ctx);
  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);

  if (
    ctx instanceof AddSubExpressionContext ||
    ctx instanceof ConjunctionExpressionContext ||
    ctx instanceof DisjunctionExpressionContext ||
    ctx instanceof EqualityExpressionContext ||
    ctx instanceof InfixExpressionContext ||
    ctx instanceof MulDivModExpressionContext ||
    ctx instanceof PowExpressionContext ||
    ctx instanceof RangeExpressionContext ||
    ctx instanceof RelationalExpressionContext ||
    ctx instanceof RelationalExpressionContext
  ) {
    return new InfixExpressionTree(
      ctx,
      new IdToken(ctx._op),
      getExpressionTree(ctx._left),
      getExpressionTree(ctx._right),
    );
  }

  Issue.errorFromContext(ctx, `Expression node not found for "${ctx.constructor.name}"`);
};

export const getExpressionTrees = (contexts: ExprContext[]): ExpressionTree[] => {
  return contexts?.map(getExpressionTree) || [];
};
