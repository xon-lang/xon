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
  IndexExpressionContext,
  InfixExpressionContext,
  InstanceExpressionContext,
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
import { ArrayExpressionTree } from './array-expression/array-expression.tree';
import { CallExpressionTree } from './call-expression/call-expression.tree';
import { ExpressionTree } from './expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { InfixExpressionTree } from './infix-expression/infix-expression.tree';
import { InstanceExpressionTree } from './instance-expression/instance-expression.tree';
import { LambdaExpressionTree } from './lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from './literal-expression/literal-expression.tree';
import { MemberExpressionTree } from './member-expression/member-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from './pipe-expression/pipe-expression.tree';
import { PrefixExpressionTree } from './prefix-expression/prefix-expression.tree';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionTree(ctx);
  if (ctx instanceof InstanceExpressionContext) return new InstanceExpressionTree(ctx);
  if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof CallExpressionContext) return new CallExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);
  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionTree(ctx);
  if (ctx instanceof PipeExpressionContext) return new PipeExpressionTree(ctx);

  if (
    ctx instanceof PowExpressionContext ||
    ctx instanceof MulDivModExpressionContext ||
    ctx instanceof AddSubExpressionContext ||
    ctx instanceof RangeExpressionContext ||
    ctx instanceof InfixExpressionContext ||
    ctx instanceof ElvisExpressionContext ||
    ctx instanceof RelationalExpressionContext ||
    ctx instanceof EqualityExpressionContext ||
    ctx instanceof ConjunctionExpressionContext ||
    ctx instanceof DisjunctionExpressionContext
  ) {
    // return new InfixExpressionTree(
    //   ctx,
    //   ctx._op.map((x) => x.text).join(''),
    //   getExpressionTree(ctx.expression()[0]),
    //   getExpressionTree(ctx.expression()[1]),
    // );
    return getOperatorExpression(ctx, ctx._op.map((x) => x.text).join(''), ctx._left, ctx._right);
  }

  if (ctx instanceof RelationalExpressionContext) {
    if (!(ctx._left instanceof RelationalExpressionContext))
      return getOperatorExpression(ctx, ctx._op.map((x) => x.text).join(''), ctx._left, ctx._right);

    return new InfixExpressionTree(
      ctx,
      '&&',
      getExpressionTree(ctx._left),
      getOperatorExpression(ctx, ctx._op.map((x) => x.text).join(''), ctx._left._right, ctx._right),
    );
  }

  throw Error(`Expression tree not found for "${ctx.constructor.name}"`);
};

export const getExpressionsTrees = (expressions: ExpressionContext[]): ExpressionTree[] =>
  expressions.map(getExpressionTree);

function getOperatorExpression(
  ctx: ExpressionContext,
  operator: string,
  left: ExpressionContext,
  right: ExpressionContext,
): ExpressionTree {
  if (!operator) throw new Error('Operator is undefined');
  if (!left) throw new Error('left operand is undefined');
  if (!right) throw new Error('right operand is undefined');

  if (operator === '<=') {
    const expression = new InfixExpressionTree(
      ctx,
      '||',
      getOperatorExpression(ctx, '<', left, right),
      getOperatorExpression(ctx, '==', left, right),
    );
    return ParenthesizedExpressionTree.fromValue(expression);
  }
  if (operator === '>=') {
    const expression = new InfixExpressionTree(
      ctx,
      '||',
      getOperatorExpression(ctx, '>', left, right),
      getOperatorExpression(ctx, '==', left, right),
    );
    return ParenthesizedExpressionTree.fromValue(expression);
  }

  return new InfixExpressionTree(ctx, operator, getExpressionTree(left), getExpressionTree(right));
}
