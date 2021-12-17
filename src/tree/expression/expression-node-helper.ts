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
  InfixExpressionContext,
  IsExpressionContext,
  LiteralExpressionContext,
  MemberExpressionContext,
  MulDivModExpressionContext,
  ParenthesizedExpressionContext,
  PipeExpressionContext,
  PowExpressionContext,
  PrefixExpressionContext,
  RangeExpressionContext,
  RelationalExpressionContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { IdToken } from '../id-token';
import { ExpressionNode } from './expression-node';
import { IdExpressionNode } from './id/id-expression-node';
import { InfixExpressionNode } from './infix/infix-expression-node';
import { IsExpressionNode } from './is/is-expression-node';
import { LiteralExpressionNode } from './literal/literal-expression-node';
import { MemberExpressionNode } from './member/member-expression-node';
import { ParenthesizedExpressionNode } from './parenthesized/parenthesized-expression-node';
import { PipeExpressionTree } from './pipe/pipe-expression-node';
import { PrefixExpressionNode } from './prefix/prefix-expression-node';
import { ArrayExpressionNode } from './array/array-expression-node';

export const getExpressionNode = (ctx: ExprContext): ExpressionNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionNode(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionNode(ctx);
  if (ctx instanceof IsExpressionContext) return new IsExpressionNode(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionNode(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionNode(ctx);
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
  contexts?.map(getExpressionNode) || [];
};
