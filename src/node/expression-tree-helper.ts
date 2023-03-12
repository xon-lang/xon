import {
  ArrayExpressionContext,
  BodyExpressionContext,
  ExpressionContext,
  PairExpressionContext,
  SourceContext,
  TokenExpressionContext,
} from '~/grammar/xon-parser';
import { Integer, String2 } from '~/lib/core';
import { ArrayNode, arrayNode } from '~/node/array/array-expression-tree';
import { BodyNode, bodyNode } from '~/node/body/body-expression-tree';
import { ladderNode } from '~/node/bodyable/bodyable-expression-tree';
import { infixNode } from '~/node/infix/infix-expression-tree';
import { invokeNode } from '~/node/invoke/invoke-expression-tree';
import { Node, NodeType } from '~/node/node';
import { postfixNode } from '~/node/postfix/postfix-expression-tree';
import { prefixNode, PrefixNode } from '~/node/prefix/prefix-expression-tree';
import { sourceNode } from '~/node/source/source-tree';
import { Lexer } from '~/parser/lexer/lexer';
import { Source } from '~/parser/lexer/source/source';
import { OperatorsOrder, operatorsOrders, OperatorType, RecursiveType } from '~/parser/parser-config';

export const getNode = (ctx: ExpressionContext): Node => {
  if (ctx instanceof TokenExpressionContext) return pairExpression(ctx);
  if (ctx instanceof ArrayExpressionContext) return arrayNode(ctx);
  if (ctx instanceof SourceContext) return sourceNode(ctx.expression().map(getNode));
  if (ctx instanceof BodyExpressionContext) return bodyNode(ctx);
  if (ctx instanceof PairExpressionContext) return pairExpression(ctx);

  throw new Error('Not implemented');

  // Issue.errorFromContext(ctx, `Expression tree not found for '${ctx.constructor.name}'`);
};

function pairExpression(ctx: ExpressionContext): Node {
  const expressions = flatExpressions(ctx);
  collapseOperators(expressions, operatorsOrders);

  const operator = expressions.find((expression) => is(expression, NodeType.OPERATOR));
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

// remove because it is like prefix
function collapseModifierExpression(expressions: Node[], operators: String2[], recursiveType: RecursiveType): void {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;
    const modifier = expressions[index];
    if (is(modifier, NodeType.OPERATOR) && operators.includes(modifier.text)) {
      const next = expressions[index + 1];
      if (next) {
        expressions[index] = {
          nodeType: NodeType.PREFIX,
          startIndex: modifier.startIndex,
          stopIndex: next.stopIndex,
          text: modifier.text + next.text,
          operator: modifier,
          expression: next,
        } as PrefixNode;
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
    if (is<ArrayNode>(element, NodeType.ARRAY) && i > 0) {
      const prev = expressions[i - 1];
      if (!is(prev, NodeType.OPERATOR)) {
        expressions[i] = invokeNode(prev, element);
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
    if (is<BodyNode>(element, NodeType.BODY) && i > 0) {
      if (i > 0) {
        expressions[i] = ladderNode(expressions[i - 1], element);
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
    if (is(operator, NodeType.OPERATOR) && operators.includes(operator.text)) {
      const left = expressions[index - 1];
      const right = expressions[index + 1];

      if (operatorType === OperatorType.PREFIX) {
        if (!is(right, NodeType.OPERATOR) && (index === 0 || is(left, NodeType.OPERATOR))) {
          return index;
        }
      } else if (operatorType === OperatorType.POSTFIX) {
        if (!is(left, NodeType.OPERATOR) && (index === expressions.length - 1 || is(right, NodeType.OPERATOR))) {
          return index;
        }
      } else if (operatorType === OperatorType.INFIX) {
        if (!is(left, NodeType.OPERATOR) && !is(right, NodeType.OPERATOR)) {
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
  if (!is(operator, NodeType.OPERATOR)) return;

  if (operatorType === OperatorType.PREFIX) {
    const right = expressions[operatorIndex + 1];
    const prefix = prefixNode(operator, right);
    expressions[operatorIndex] = prefix;
    expressions.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = expressions[operatorIndex - 1];
    const postfix = postfixNode(operator, left);
    expressions[operatorIndex] = postfix;
    expressions.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = expressions[operatorIndex - 1] as Node;
    const right = expressions[operatorIndex + 1] as Node;
    const infix = infixNode(operator, left, right);
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

export function is<T extends Node = Node>(node: Node, nodeType: NodeType): node is T {
  return node?.nodeType === nodeType;
}
