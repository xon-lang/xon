/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  AddSubExpressionContext,
  ArrayExpressionContext,
  CallExpressionContext,
  EqualityExpressionContext,
  ExpressionContext,
  IdExpressionContext,
  IndexExpressionContext,
  InstanceExpressionContext,
  LambdaExpressionContext,
  LiteralExpressionContext,
  MemberExpressionContext,
  MulDivModExpressionContext,
  ParenthesizedExpressionContext,
  PipeExpressionContext,
  PowExpressionContext,
  RangeExpressionContext,
  RelationalExpressionContext,
} from '../../grammar/xon-parser';
import { ArrayExpressionTree } from './array-expression/array-expression.tree';
import { CallExpressionTree } from './call-expression/call-expression.tree';
import { ExpressionTree } from './expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { InstanceExpressionTree } from './instance-expression/instance-expression.tree';
import { InstantiationExpressionTree } from './instantiation-expression/instantiation-expression.tree';
import { LambdaExpressionTree } from './lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from './literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from './logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from './logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from './logical-or-expression/logical-or-expression.tree';
import { MemberExpressionTree } from './member-expression/member-expression.tree';
import { NegativeExpressionTree } from './prefix-expression/prefix-expression.tree';
import { OperatorExpressionTree } from './infix-expression/infix-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from './pipe-expression/pipe-expression.tree';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionTree(ctx);
  if (ctx instanceof InstanceExpressionContext) return new InstanceExpressionTree(ctx);
  if (ctx instanceof InstantiationExpressionContext) return new InstantiationExpressionTree(ctx);
  if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof LogicalAndExpressionContext) return new LogicalAndExpressionTree(ctx);
  if (ctx instanceof LogicalNotExpressionContext) return new LogicalNotExpressionTree(ctx);
  if (ctx instanceof LogicalOrExpressionContext) return new LogicalOrExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof CallExpressionContext) return new CallExpressionTree(ctx);
  if (ctx instanceof NegativeExpressionContext) return new NegativeExpressionTree(ctx);
  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionTree(ctx);
  if (ctx instanceof PipeExpressionContext) return new PipeExpressionTree(ctx);

  if (
    ctx instanceof AddSubExpressionContext ||
    ctx instanceof EqualityExpressionContext ||
    ctx instanceof MulDivModExpressionContext ||
    ctx instanceof PowExpressionContext ||
    ctx instanceof RangeExpressionContext
  ) {
    return getOperatorExpression(ctx._op.text, ctx, ctx._left, ctx._right);
  }

  if (ctx instanceof RelationalExpressionContext) {
    if (!(ctx._left instanceof RelationalExpressionContext))
      return getOperatorExpression(ctx._op.text, ctx, ctx._left, ctx._right);

    const andExpression = new LogicalAndExpressionTree();
    andExpression.left = getExpressionTree(ctx._left);
    andExpression.right = getOperatorExpression(ctx._op.text, ctx, ctx._left._right, ctx._right);
    return andExpression;
  }

  throw Error(`Expression tree not found for "${ctx.constructor.name}"`);
};

export const getExpressionsTrees = (expressions: ExpressionContext[]): ExpressionTree[] =>
  expressions.map(getExpressionTree);

function getOperatorExpression(
  operator: string,
  ctx: ExpressionContext,
  left: ExpressionContext,
  right: ExpressionContext,
): ExpressionTree {
  if (!operator) throw new Error('Operator is undefined');
  if (!left) throw new Error('left operand is undefined');
  if (!right) throw new Error('right operand is undefined');

  if (operator === '<=') {
    const expression = new LogicalOrExpressionTree();
    expression.left = getOperatorExpression('<', ctx, left, right);
    expression.right = getOperatorExpression('==', ctx, left, right);

    return ParenthesizedExpressionTree.fromValue(expression);
  }
  if (operator === '>=') {
    const expression = new LogicalOrExpressionTree();
    expression.left = getOperatorExpression('>', ctx, left, right);
    expression.right = getOperatorExpression('==', ctx, left, right);
    return ParenthesizedExpressionTree.fromValue(expression);
  }
  if (operator === '!=') {
    const expression = new LogicalNotExpressionTree();
    expression.value = ParenthesizedExpressionTree.fromValue(
      getOperatorExpression('==', ctx, left, right),
    );
    return expression;
  }

  return new OperatorExpressionTree(
    ctx,
    operator,
    getExpressionTree(left),
    getExpressionTree(right),
  );
}
