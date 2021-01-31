import {
  AddSubExpressionContext,
  ArrayExpressionContext,
  EqualityExpressionContext,
  ExpressionContext,
  FunctionExpressionContext,
  IdExpressionContext,
  IndexExpressionContext,
  LambdaExpressionContext,
  LiteralExpressionContext,
  LogicalAndExpressionContext,
  LogicalNotExpressionContext,
  LogicalOrExpressionContext,
  MemberExpressionContext,
  MulDivModExpressionContext,
  ObjectExpressionContext,
  ParenthesizedExpressionContext,
  PipeExpressionContext,
  PowExpressionContext,
  RelationalExpressionContext,
  UnaryMinusExpressionContext,
} from '../../grammar/xon-parser';
import { AddExpressionTree } from './add-expression/add-expression.tree';
import { ArrayExpressionTree } from './array-expression/array-expression.tree';
import { DivideExpressionTree } from './divide-expression/divide-expression.tree';
import { EqualsExpressionTree } from './equals-expression/equals-expression.tree';
import { ExpressionTree } from './expression.tree';
import { FunctionExpressionTree } from './function-expression/function-expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { LambdaExpressionTree } from './lambda-expression/lambda-expression.tree';
import { LessThanEqualsExpressionTree } from './less-than-equals-expression/less-than-equals-expression.tree';
import { LessThanExpressionTree } from './less-than-expression/less-than-expression.tree';
import { LiteralExpressionTree } from './literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from './logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from './logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from './logical-or-expression/logical-or-expression.tree';
import { MemberExpressionTree } from './member-expression/member-expression.tree';
import { ModuloExpressionTree } from './modulo-expression/modulo-expression.tree';
import { MoreThanEqualsExpressionTree } from './more-than-equals-expression/more-than-equals-expression.tree';
import { MoreThanExpressionTree } from './more-than-expression/more-than-expression.tree';
import { MultiplyExpressionTree } from './multiply-expression/multiply-expression.tree';
import { NotEqualsExpressionTree } from './not-equals-expression/not-equals-expression.tree';
import { ObjectExpressionTree } from './object-expression/object-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from './pipe-expression/pipe-expression.tree';
import { PowExpressionTree } from './pow-expression/pow-expression.tree';
import { SubstractExpressionTree } from './substract-expression/substract-expression.tree';
import { UnaryMinusExpressionTree } from './unary-minus-expression/unary-minus-expression.tree';

export function getExpressionTree(ctx: ExpressionContext): ExpressionTree {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionTree(ctx);
  if (ctx instanceof PowExpressionContext) return new PowExpressionTree(ctx);
  if (ctx instanceof UnaryMinusExpressionContext) return new UnaryMinusExpressionTree(ctx);
  if (ctx instanceof LogicalNotExpressionContext) return new LogicalNotExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof FunctionExpressionContext) return new FunctionExpressionTree(ctx);
  if (ctx instanceof LogicalAndExpressionContext) return new LogicalAndExpressionTree(ctx);
  if (ctx instanceof LogicalOrExpressionContext) return new LogicalOrExpressionTree(ctx);
  if (ctx instanceof PipeExpressionContext) return new PipeExpressionTree(ctx);
  if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
  if (ctx instanceof ObjectExpressionContext) return new ObjectExpressionTree(ctx);
  if (ctx instanceof MulDivModExpressionContext) {
    if (ctx.Slash()) return new DivideExpressionTree(ctx);
    if (ctx.Modulo()) return new ModuloExpressionTree(ctx);
    if (ctx.Asterisk()) return new MultiplyExpressionTree(ctx);
  }
  if (ctx instanceof AddSubExpressionContext) {
    if (ctx.Plus()) return new AddExpressionTree(ctx);
    if (ctx.Minus()) return new SubstractExpressionTree(ctx);
  }
  if (ctx instanceof RelationalExpressionContext) {
    if (ctx.LessThan()) return new LessThanExpressionTree(ctx);
    if (ctx.LessThanEquals()) return new LessThanEqualsExpressionTree(ctx);
    if (ctx.MoreThan()) return new MoreThanExpressionTree(ctx);
    if (ctx.MoreThanEquals()) return new MoreThanEqualsExpressionTree(ctx);
  }
  if (ctx instanceof EqualityExpressionContext) {
    if (ctx.Equals()) return new EqualsExpressionTree(ctx);
    if (ctx.NotEquals()) return new NotEqualsExpressionTree(ctx);
  }

  throw Error(`No Expression found for ${ctx?.constructor?.name}`);
}

export function getExpressionsTree(expressions: ExpressionContext[]): ExpressionTree[] {
  return expressions.map(getExpressionTree);
}
