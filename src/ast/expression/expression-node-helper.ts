/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  AddSubExpressionContext,
  ArgumentsContext,
  ArrayExpressionContext,
  ConjunctionExpressionContext,
  DisjunctionExpressionContext,
  ElvisExpressionContext,
  EqualityExpressionContext,
  ExprContext,
  GenericsContext,
  IdExpressionContext,
  IndexerExpressionContext,
  IndexExpressionContext,
  InfixExpressionContext,
  InvokeExpressionContext,
  LiteralExpressionContext,
  MemberExpressionContext,
  MethodExpressionContext,
  MulDivModExpressionContext,
  NullableExpressionContext,
  ParenthesizedExpressionContext,
  PipeExpressionContext,
  PowExpressionContext,
  PrefixExpressionContext,
  RangeExpressionContext,
  RelationalExpressionContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { IdToken } from '../id-token';
import { ArrayExpressionNode } from './array/array-expression-node';
import { ExpressionNode } from './expression-node';
import { IdExpressionNode } from './id/id-expression-node';
import { IndexExpressionNode } from './index/index-expression-node';
import { IndexerExpressionNode } from './indexer/indexer-expression-node';
import { InfixExpressionNode } from './infix/infix-expression-node';
import { InvokeExpressionNode } from './invoke/invoke-expression-node';
import { LiteralExpressionNode } from './literal/literal-expression-node';
import { MemberExpressionNode } from './member/member-expression-node';
import { MethodExpressionNode } from './method/method-expression-node';
import { NullableExpressionNode } from './nullable/nullable-expression-node';
import { ParenthesizedExpressionNode } from './parenthesized/parenthesized-expression-node';
import { PipeExpressionTree } from './pipe/pipe-expression-node';
import { PrefixExpressionNode } from './prefix/prefix-expression-node';

export const getExpressionNode = (ctx: ExprContext): ExpressionNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionNode(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionNode(ctx);
  if (ctx instanceof IndexerExpressionContext) return new IndexerExpressionNode(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionNode(ctx);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionNode(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionNode(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionNode(ctx);
  if (ctx instanceof MethodExpressionContext) return new MethodExpressionNode(ctx);
  if (ctx instanceof NullableExpressionContext) return new NullableExpressionNode(ctx);
  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionNode(ctx);
  if (ctx instanceof PipeExpressionContext) return new PipeExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionNode(ctx);

  if (ctx instanceof InfixExpressionContext)
    return new InfixExpressionNode(
      ctx,
      IdToken.fromContext(ctx._op),
      getExpressionNode(ctx._left),
      getExpressionNode(ctx._right),
    );
  if (
    ctx instanceof PowExpressionContext ||
    ctx instanceof MulDivModExpressionContext ||
    ctx instanceof AddSubExpressionContext ||
    ctx instanceof RangeExpressionContext ||
    ctx instanceof ElvisExpressionContext ||
    ctx instanceof RelationalExpressionContext ||
    ctx instanceof EqualityExpressionContext ||
    ctx instanceof ConjunctionExpressionContext ||
    ctx instanceof DisjunctionExpressionContext ||
    ctx instanceof RelationalExpressionContext
  ) {
    if (
      ctx instanceof RelationalExpressionContext &&
      ctx._left instanceof RelationalExpressionContext
    )
      return new InfixExpressionNode(
        ctx,
        IdToken.fromText('&&'),
        getExpressionNode(ctx._left),
        new InfixExpressionNode(
          ctx,
          new IdToken(ctx._op),
          getExpressionNode(ctx._left._right),
          getExpressionNode(ctx._right),
        ),
      );

    return new InfixExpressionNode(
      ctx,
      new IdToken(ctx._op),
      getExpressionNode(ctx._left),
      getExpressionNode(ctx._right),
    );
  }

  throw Issue.errorFromContext(ctx, `Expression tree not found for '${ctx.constructor.name}'`);
};

export const getExpressionNodes = (
  contexts: ExprContext[] | ArgumentsContext | GenericsContext,
): ExpressionNode[] => {
  if (contexts instanceof ArgumentsContext) return getExpressionNodes(contexts.expr());
  if (contexts instanceof GenericsContext) return getExpressionNodes(contexts.arguments());
  return contexts?.map(getExpressionNode) || [];
};