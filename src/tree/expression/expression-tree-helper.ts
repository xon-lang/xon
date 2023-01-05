import {
  ArrayExpressionContext,
  ExpressionContext,
  FloatExpressionContext,
  IdExpressionContext,
  InfixExpressionContext,
  IntegerExpressionContext,
  InvokeExpressionContext,
  LambdaExpressionContext,
  MemberExpressionContext,
  PrefixExpressionContext,
  PreprocessorExpressionContext,
  StringExpressionContext,
} from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { FloatExpressionTree } from '~/tree/expression/float/float-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { LambdaExpressionTree } from '~/tree/expression/lambda/lambda-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { PreprocessorExpressionTree } from '~/tree/expression/preprocessor/preprocessor-expression-tree';
import { StringExpressionTree } from '~/tree/expression/string/string-expression-tree';
import { Token } from '~/tree/token';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx instanceof PreprocessorExpressionContext) return new PreprocessorExpressionTree(ctx);
  if (ctx instanceof IntegerExpressionContext) return new IntegerExpressionTree(ctx);
  if (ctx instanceof FloatExpressionContext) return new FloatExpressionTree(ctx);
  if (ctx instanceof StringExpressionContext) return new StringExpressionTree(ctx);
  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof LambdaExpressionContext) return new LambdaExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);

  if (ctx instanceof InfixExpressionContext) {
    const operators = ['^', '* / %', '+ -', '..', '< <= >= >', '== !=', '&', '|'];
    const operatorsMatrix = operators.map((x) => x.split(' '));

    const expressions: (Token | ExpressionTree)[] = flatExpressions(ctx);

    for (const operators of operatorsMatrix) {
      const operatorsCount = expressions.filter((x) => x instanceof Token && operators.includes(x.text)).length;
      for (let i = 0; i < operatorsCount; i++) {
        const operatorIndex = expressions.findIndex((x) => x instanceof Token && operators.includes(x.text));
        if (operatorIndex >= 0) {
          expressions[operatorIndex] = new InfixExpressionTree(
            expressions[operatorIndex] as Token,
            expressions[operatorIndex - 1] as ExpressionTree,
            expressions[operatorIndex + 1] as ExpressionTree,
          );
          expressions.splice(operatorIndex - 1, 1);
          expressions.splice(operatorIndex, 1);
        }
      }
    }

    return expressions[0] as ExpressionTree;
  }

  Issue.errorFromContext(ctx, `Expression tree not found for "${ctx.constructor.name}"`);
};

function flatExpressions(context: ExpressionContext): (Token | ExpressionTree)[] {
  if (context instanceof InfixExpressionContext) {
    const [left, right] = context.expression();

    return [...flatExpressions(left), Token.from(context.OP()), getExpressionTree(right)];
  }

  return [getExpressionTree(context)];
}
