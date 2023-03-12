import {
  ArrayExpressionContext,
  BodyExpressionContext,
  ExpressionContext,
  PairExpressionContext,
  SourceContext,
  TokenExpressionContext,
} from '~/grammar/xon-parser';
import { Integer, String2 } from '~/lib/core';
import { ArrayNode, getArrayNode } from '~/node/array/array-expression-tree';
import { BodyNode, getBodyNode } from '~/node/body/body-expression-tree';
import { BodyableNode } from '~/node/bodyable/bodyable-expression-tree';
import { InfixNode } from '~/node/infix/infix-expression-tree';
import { InvokeNode } from '~/node/invoke/invoke-expression-tree';
import { Node, NodeType } from '~/node/node';
import { PostfixNode } from '~/node/postfix/postfix-expression-tree';
import { PrefixNode } from '~/node/prefix/prefix-expression-tree';
import { SourceNode } from '~/node/source/source-tree';
import { Lexer } from '~/parser/lexer/lexer';
import { Source } from '~/parser/lexer/source/source';
import { OperatorsOrder, operatorsOrders, OperatorType, RecursiveType } from '~/parser/parser-config';

export const getNode = (ctx: ExpressionContext): Node => {
  if (ctx instanceof TokenExpressionContext) return pairExpression(ctx);
  if (ctx instanceof ArrayExpressionContext) return getArrayNode(ctx);
  if (ctx instanceof SourceContext) return new SourceNode(ctx);
  if (ctx instanceof BodyExpressionContext) return getBodyNode(ctx);
  if (ctx instanceof PairExpressionContext) return pairExpression(ctx);

  throw new Error('Not implemented');

  // Issue.errorFromContext(ctx, `Expression tree not found for '${ctx.constructor.name}'`);
};

function pairExpression(ctx: ExpressionContext): Node {
  const expressions = flatExpressions(ctx);
  collapseOperators(expressions, operatorsOrders);

  const operator = expressions.find((expression) => isOperatorToken(expression));
  if (operator) {
    throw new Error('Not implemented');
    // Issue.errorFromTree(operator, 'Extra parameter found');
  }

  return expressions[0] as Node;
}

function collapseOperators(expressions: Node[], operatorsOrders: OperatorsOrder[]): void {
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

function collapseModifierExpression(expressions: Node[], operators: String2[], recursiveType: RecursiveType): void {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;
    const modifier = expressions[index];
    if (isOperatorToken(modifier) && operators.includes(modifier.text)) {
      const next = expressions[index + 1];
      if (next) {
        expressions[index] = new PrefixNode(modifier, next);
        expressions.splice(index + 1, 1);
        collapseModifierExpression(expressions, operators, recursiveType);

        return;
      }
    }
  }
}

function collapseInvokeExpression(expressions: Node[]): void {
  for (let i = 0; i < expressions.length; i++) {
    const element = expressions[i];
    if (element instanceof ArrayNode && i > 0) {
      const prev = expressions[i - 1];
      if (!isOperatorToken(prev)) {
        expressions[i] = new InvokeNode(prev, element);
        expressions.splice(i - 1, 1);
        collapseInvokeExpression(expressions);

        return;
      }
    }
  }
}

function collapseBodyExpression(expressions: Node[]): void {
  for (let i = 0; i < expressions.length; i++) {
    const element = expressions[i];
    if (element instanceof BodyNode && i > 0) {
      if (i > 0) {
        expressions[i] = new BodyableNode(expressions[i - 1], element);
        expressions.splice(i - 1, 1);
        collapseBodyExpression(expressions);

        return;
      }
    }
  }
}

function findOperatorIndex(
  expressions: Node[],
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Integer {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;

    const operator = expressions[index];
    if (isOperatorToken(operator) && operators.includes(operator.text)) {
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

function collapseExpressions(expressions: Node[], operatorType: OperatorType, operatorIndex: Integer): void {
  if (operatorIndex < 0) return;
  const operator = expressions[operatorIndex] as Node;
  if (!isOperatorToken(operator)) return;

  if (operatorType === OperatorType.PREFIX) {
    const right = expressions[operatorIndex + 1];
    const prefix = new PrefixNode(operator, right);
    expressions[operatorIndex] = prefix;
    expressions.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = expressions[operatorIndex - 1];
    const postfix = new PostfixNode(operator, left);
    expressions[operatorIndex] = postfix;
    expressions.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = expressions[operatorIndex - 1] as Node;
    const right = expressions[operatorIndex + 1] as Node;
    const infix = new InfixNode(operator, left, right);
    expressions[operatorIndex] = infix;
    expressions.splice(operatorIndex - 1, 1);
    expressions.splice(operatorIndex, 1);
  }
}

function flatExpressions(ctx: ExpressionContext): Node[] {
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
    return tokens;
  }

  return [getNode(ctx)];
}

export function isOperatorToken(node?: Node): node is Node {
  return node?.nodeType === NodeType.OPERATOR;
}

export function isIdToken(node?: Node): node is Node {
  return node?.nodeType === NodeType.ID;
}

export function isIntegerToken(node?: Node): node is Node {
  return node?.nodeType === NodeType.INTEGER;
}

export function isStringToken(node?: Node): node is Node {
  return node?.nodeType === NodeType.STRING;
}
