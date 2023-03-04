import {
  ArrayExpressionContext,
  ExpressionContext,
  FloatExpressionContext,
  IdExpressionContext,
  InfixExpressionContext,
  IntegerExpressionContext,
  InvokeExpressionContext,
  KeywordExpressionContext,
  MemberExpressionContext,
  PostfixExpressionContext,
  PrefixExpressionContext,
  StringExpressionContext,
} from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { Boolean2, Integer, String2 } from '~/lib/core';
import { leftOperators, rightOperators } from '~/parser/parser-config';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { FloatExpressionTree } from '~/tree/expression/float/float-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { KeywordExpressionTree } from '~/tree/expression/keyword/keyword-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { PostfixExpressionTree } from '~/tree/expression/postfix/postfix-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { StringExpressionTree } from '~/tree/expression/string/string-expression-tree';
import { Token } from '~/tree/token';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx instanceof IntegerExpressionContext) return new IntegerExpressionTree(ctx);
  if (ctx instanceof FloatExpressionContext) return new FloatExpressionTree(ctx);
  if (ctx instanceof StringExpressionContext) return new StringExpressionTree(ctx);
  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);
  if (ctx instanceof PostfixExpressionContext) return new PostfixExpressionTree(ctx);
  if (ctx instanceof KeywordExpressionContext) return new KeywordExpressionTree(ctx);
  if (ctx instanceof InfixExpressionContext) return infixExpression(ctx);

  Issue.errorFromContext(ctx, `Expression tree not found for '${ctx.constructor.name}'`);
};

function infixExpression(ctx: InfixExpressionContext): ExpressionTree {
  const expressions = flatExpressions(ctx);
  joinOperators(expressions, leftOperators, true);
  joinOperators(expressions, rightOperators, false);

  if (expressions.length > 1) {
    throw new Error('Something went wrong!');
  }

  return expressions[0] as ExpressionTree;
}

function joinOperators(
  expressions: (Token | ExpressionTree)[],
  operatorsStrings: String2[],
  startFromLeft: Boolean2,
): void {
  const operatorsMatrix = operatorsStrings.map((x) => x.split(' '));
  for (const operators of operatorsMatrix) {
    const includingCount = expressions.filter((x) => x instanceof Token && operators.includes(x.text)).length;
    for (let i = 0; i < includingCount; i++) {
      const operatorIndex =
        (startFromLeft && expressions.findIndex((x) => x instanceof Token && operators.includes(x.text))) ||
        expressions.findLastIndex((x) => x instanceof Token && operators.includes(x.text));
      collapseExpressions(expressions, operatorIndex);
    }
  }
}

function collapseExpressions(expressions: (Token | ExpressionTree)[], operatorIndex: Integer): void {
  if (operatorIndex >= 0) {
    const operator = expressions[operatorIndex] as Token;
    const left = expressions[operatorIndex - 1] as ExpressionTree;
    const right = expressions[operatorIndex + 1] as ExpressionTree;
    const infix = new InfixExpressionTree(operator, left, right);

    expressions[operatorIndex] = infix;
    expressions.splice(operatorIndex - 1, 1);
    expressions.splice(operatorIndex, 1);
  }
}

function flatExpressions(ctx: ExpressionContext): (Token | ExpressionTree)[] {
  if (ctx instanceof InfixExpressionContext) {
    const [left, right] = ctx.expression();

    return [...flatExpressions(left), Token.from(ctx.OPERATOR()), getExpressionTree(right)];
  }

  return [getExpressionTree(ctx)];
}
