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
import { IdToken } from '../util/id-token';
import { ArrayExpressionNode } from './array/array-expression-node';
import { ExpressionNode } from './expression-node';
import { IdExpressionNode } from './id/id-expression-node';
import { IndexExpressionNode } from './index/index-expression-node';
import { InfixExpressionNode } from './infix/infix-expression-node';
import { InvokeExpressionNode } from './invoke/invoke-expression-node';
import { LiteralExpressionNode } from './literal/literal-expression-node';
import { MemberExpressionNode } from './member/member-expression-node';
import { MethodExpressionNode } from './method/method-expression-node';
import { NullableExpressionNode } from './nullable/nullable-expression-node';
import { ParenthesizedExpressionNode } from './parenthesized/parenthesized-expression-node';
import { PrefixExpressionNode } from './prefix/prefix-expression-node';

export const getExpressionNode = (ctx: ExprContext): ExpressionNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionNode(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionNode(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionNode(ctx);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionNode(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionNode(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionNode(ctx);
  if (ctx instanceof MethodExpressionContext) return new MethodExpressionNode(ctx);
  if (ctx instanceof NullableExpressionContext) return new NullableExpressionNode(ctx);
  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionNode(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionNode(ctx);

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
    return new InfixExpressionNode(
      ctx,
      new IdToken(ctx._op),
      getExpressionNode(ctx._left),
      getExpressionNode(ctx._right),
    );
  }

  Issue.errorFromContext(ctx, `Expression node not found for "${ctx.constructor.name}"`);
};

export const getExpressionNodes = (contexts: ExprContext[]): ExpressionNode[] => {
  return contexts?.map(getExpressionNode) || [];
};
