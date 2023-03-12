import {
  ArrayExpressionContext,
  BodyExpressionContext,
  ExpressionContext,
  PairExpressionContext,
  TokenExpressionContext,
} from '~/grammar/xon-parser';
import { Integer, String2 } from '~/lib/core';
import { Lexer } from '~/parser/lexer/lexer';
import { NodeType } from '~/parser/lexer/node';
import { OperatorsOrder, operatorsOrders, OperatorType, RecursiveType } from '~/parser/parser-config';
import { Source } from '~/source/source';
import { ArrayExpressionTree, getArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { BodyExpressionTree, getBodyExpressionTree } from '~/tree/expression/body/body-expression-tree';
import { BodyableExpressionTree } from '~/tree/expression/bodyable/bodyable-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { PostfixExpressionTree } from '~/tree/expression/postfix/postfix-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (ctx instanceof TokenExpressionContext) return pairExpression(ctx);
  if (ctx instanceof ArrayExpressionContext) return getArrayExpressionTree(ctx);
  if (ctx instanceof BodyExpressionContext) return getBodyExpressionTree(ctx);
  if (ctx instanceof PairExpressionContext) return pairExpression(ctx);

  throw new Error('Not implemented');

  // Issue.errorFromContext(ctx, `Expression tree not found for '${ctx.constructor.name}'`);
};

function pairExpression(ctx: ExpressionContext): ExpressionTree {
  const expressions = flatExpressions(ctx);
  collapseOperators(expressions, operatorsOrders);

  const operator = expressions.find((expression) => isOperatorToken(expression));
  if (operator) {
    throw new Error('Not implemented');
    // Issue.errorFromTree(operator, 'Extra parameter found');
  }

  return expressions[0] as ExpressionTree;
}

function collapseOperators(expressions: ExpressionTree[], operatorsOrders: OperatorsOrder[]): void {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.MODIFIER) {
      collapseModifierExpression(expressions, operatorsOrder.operators[0].split(' '), operatorsOrder.recursiveType);
    }
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvokeExpression(expressions);
    }
    if (operatorsOrder.operatorType === OperatorType.BODY) {
      collapseBodyExpression(expressions);
    }
    for (const operators of operatorsOrder.operators) {
      const operatorsStrings = operators.split(' ');
      const operatorIndex = findOperatorIndex(
        expressions,
        operatorsStrings,
        operatorsOrder.operatorType,
        operatorsOrder.recursiveType,
      );
      if (operatorIndex >= 0) {
        collapseExpressions(expressions, operatorsOrder.operatorType, operatorIndex);
        collapseOperators(expressions, operatorsOrders);
      }
    }
  }
}

function collapseModifierExpression(
  expressions: ExpressionTree[],
  operators: String2[],
  recursiveType: RecursiveType,
): void {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;
    const element = expressions[index];
    if (isOperatorToken(element) && operators.includes(element.name.text)) {
      const next = expressions[index + 1];
      if (next) {
        expressions[index] = new PrefixExpressionTree(element.name, next);
        expressions.splice(index + 1, 1);
        collapseModifierExpression(expressions, operators, recursiveType);

        return;
      }
    }
  }
}

function collapseInvokeExpression(expressions: ExpressionTree[]): void {
  for (let i = 0; i < expressions.length; i++) {
    const element = expressions[i];
    if (element instanceof ArrayExpressionTree && i > 0) {
      const prev = expressions[i - 1];
      if (!isOperatorToken(prev)) {
        expressions[i] = new InvokeExpressionTree(prev, element);
        expressions.splice(i - 1, 1);
        collapseInvokeExpression(expressions);

        return;
      }
    }
  }
}

function collapseBodyExpression(expressions: ExpressionTree[]): void {
  for (let i = 0; i < expressions.length; i++) {
    const element = expressions[i];
    if (element instanceof BodyExpressionTree && i > 0) {
      if (i > 0) {
        expressions[i] = new BodyableExpressionTree(expressions[i - 1], element);
        expressions.splice(i - 1, 1);
        collapseBodyExpression(expressions);

        return;
      }
    }
  }
}

function findOperatorIndex(
  expressions: ExpressionTree[],
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Integer {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;

    const operator = expressions[index];
    if (isOperatorToken(operator) && operators.includes(operator.name.text)) {
      const left = expressions[index - 1];
      const right = expressions[index + 1];

      if (operatorType === OperatorType.PREFIX) {
        if (!isOperatorToken(right) && (index === 0 || isOperatorToken(left))) {
          return index;
        }
      } else if (operatorType === OperatorType.POSTFIX) {
        if (!isOperatorToken(left) && (index === expressions.length - 1 || isOperatorToken(right))) {
          return index;
        }
      } else if (operatorType === OperatorType.INFIX) {
        if (!isOperatorToken(left) && !isOperatorToken(right)) {
          return index;
        }
      }
    }
  }

  return -1;
}

function collapseExpressions(expressions: ExpressionTree[], operatorType: OperatorType, operatorIndex: Integer): void {
  if (operatorIndex < 0) return;
  const operator = expressions[operatorIndex] as TokenExpressionTree;
  if (!isOperatorToken(operator)) return;

  if (operatorType === OperatorType.PREFIX) {
    const right = expressions[operatorIndex + 1];
    const prefix = new PrefixExpressionTree(operator.name, right);
    expressions[operatorIndex] = prefix;
    expressions.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = expressions[operatorIndex - 1];
    const postfix = new PostfixExpressionTree(operator.name, left);
    expressions[operatorIndex] = postfix;
    expressions.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = expressions[operatorIndex - 1] as ExpressionTree;
    const right = expressions[operatorIndex + 1] as ExpressionTree;
    const infix = new InfixExpressionTree(operator.name, left, right);
    expressions[operatorIndex] = infix;
    expressions.splice(operatorIndex - 1, 1);
    expressions.splice(operatorIndex, 1);
  }
}

function flatExpressions(ctx: ExpressionContext): ExpressionTree[] {
  if (ctx instanceof PairExpressionContext) {
    return ctx.expression().flatMap((x) => flatExpressions(x));
  }

  if (ctx instanceof TokenExpressionContext) {
    const antlrTokens = ctx.TOKEN();
    const startIndex = antlrTokens[0].payload.startIndex;
    const stopIndex = antlrTokens[antlrTokens.length - 1].payload.stopIndex;

    const sourceName = antlrTokens[0].payload.inputStream?.sourceName;
    const location = (sourceName !== '<unknown>' && sourceName) || null;
    const source = Source.fromText(String(antlrTokens[0].payload.inputStream), location);
    const lexer = new Lexer(source, startIndex, stopIndex);
    const tokens = lexer
      .getTokens()
      .filter((x) => x.nodeType !== NodeType.WHITESPACE && x.nodeType !== NodeType.LINE_JOINING);
    return tokens.map(x=>new TokenExpressionTree(x));
  }

  return [getExpressionTree(ctx)];
}

export function isOperatorToken(expression: ExpressionTree): expression is TokenExpressionTree {
  return expression instanceof TokenExpressionTree && expression.name.nodeType === NodeType.OPERATOR;
}

export function isIdToken(expression: ExpressionTree): expression is TokenExpressionTree {
  return expression instanceof TokenExpressionTree && expression.name.nodeType === NodeType.ID;
}

export function isIntegerToken(expression: ExpressionTree): expression is TokenExpressionTree {
  return expression instanceof TokenExpressionTree && expression.name.nodeType === NodeType.INTEGER;
}

export function isStringToken(expression: ExpressionTree): expression is TokenExpressionTree {
  return expression instanceof TokenExpressionTree && expression.name.nodeType === NodeType.STRING;
}
