/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  AddSubExpressionContext,
  ArrayExpressionContext,
  CallExpressionContext,
  ConjunctionExpressionContext,
  DisjunctionExpressionContext,
  ElvisExpressionContext,
  EqualityExpressionContext,
  ExpressionContext,
  IdExpressionContext,
  InfixExpressionContext,
  IsExpressionContext,
  LambdaExpressionContext,
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
import { IdToken } from '../id-token';
import { ArrayExpressionTree } from './array/array-expression.tree';
import { CallExpressionTree } from './call/call-expression.tree';
import { ExpressionTree } from './expression.tree';
import { IdExpressionTree } from './id/id-expression.tree';
import { InfixExpressionTree } from './infix/infix-expression.tree';
import { IsExpressionTree } from './is/is-expression.tree';
import { LambdaExpressionTree } from './lambda/lambda-expression.tree';
import { LiteralExpressionTree } from './literal/literal-expression.tree';
import { MemberExpressionTree } from './member/member-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized/parenthesized-expression.tree';
import { PipeExpressionTree } from './pipe/pipe-expression.tree';
import { PrefixExpressionTree } from './prefix/prefix-expression.tree';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof CallExpressionContext) return new CallExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof IsExpressionContext) return new IsExpressionTree(ctx);
  if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionTree(ctx);
  if (ctx instanceof PipeExpressionContext) return new PipeExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);

  if (
    ctx instanceof InfixExpressionContext ||
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
      return new InfixExpressionTree(
        ctx,
        IdToken.fromText('&&'),
        getExpressionTree(ctx._left),
        new InfixExpressionTree(
          ctx,
          new IdToken(ctx._op),
          getExpressionTree(ctx._left._right),
          getExpressionTree(ctx._right),
        ),
      );

    return new InfixExpressionTree(
      ctx,
      new IdToken(ctx._op),
      getExpressionTree(ctx._left),
      getExpressionTree(ctx._right),
    );
  }

  throw Error(`Expression tree not found for "${ctx.constructor.name}"`);
};

export const getExpressionsTrees = (contexts: ExpressionContext[]): ExpressionTree[] =>
  contexts?.map(getExpressionTree) || [];
