import {
  ArrayExpressionContext,
  ExpressionContext,
  FunctionExpressionContext,
  IdExpressionContext,
  IndexExpressionContext,
  InfixExpressionContext,
  LambdaExpressionContext,
  LiteralExpressionContext,
  ObjectExpressionContext,
  ParenthesizedExpressionContext,
  PostfixExpressionContext,
  PrefixExpressionContext,
  StringFormatExpressionContext,
} from '../../grammar/xon-parser';
import { ArrayExpressionTree } from './array-expression/array-expression.tree';
import { ExpressionTree } from './expression.tree';
import { FunctionExpressionTree } from './function-expression/function-expression.tree';
import { IdExpressionTree } from './id-expression/id-expression.tree';
import { IndexExpressionTree } from './index-expression/index-expression.tree';
import { InfixExpressionTree } from './infix-expression/infix-expression.tree';
import { LambdaExpressionTree } from './lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from './literal-expression/literal-expression.tree';
import { ObjectExpressionTree } from './object-expression/object-expression.tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression/parenthesized-expression.tree';
import { PostfixExpressionTree } from './postfix-expression/postfix-expression.tree';
import { PrefixExpressionTree } from './prefix-expression/prefix-expression.tree';
import { StringFormatExpressionTree } from './string-format-expression/string-format-expression.tree';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ParenthesizedExpressionContext) return new ParenthesizedExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IndexExpressionContext) return new IndexExpressionTree(ctx);
  if (ctx instanceof FunctionExpressionContext) return new FunctionExpressionTree(ctx);
  if (ctx instanceof StringFormatExpressionContext) return new StringFormatExpressionTree(ctx);
  if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
  if (ctx instanceof ObjectExpressionContext) return new ObjectExpressionTree(ctx);
  if (ctx instanceof InfixExpressionContext) return new InfixExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);
  if (ctx instanceof PostfixExpressionContext) return new PostfixExpressionTree(ctx);

  throw Error(`No Expression found for ${ctx?.constructor?.name}`);
};

export const getExpressionsTrees = (expressions: ExpressionContext[]): ExpressionTree[] =>
  expressions.map(getExpressionTree);

// fix circular dependency for binary-expression
// eslint-disable-next-line
global['getExpressionTree'] = getExpressionTree;
