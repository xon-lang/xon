import {
  ArrayExpressionContext,
  BodyExpressionContext,
  ExpressionContext,
  PairExpressionContext,
  SourceContext,
  TokenExpressionContext,
} from '~/grammar/xon-parser';
import { Integer, String2 } from '~/lib/core';
import { ArrayNode, arrayNode } from '~/node/array/array-node';
import { BodyNode, bodyNode } from '~/node/body/body-node';
import { infixNode } from '~/node/infix/infix-node';
import { invokeNode } from '~/node/invoke/invoke-node';
import { ladderNode } from '~/node/ladder/ladder-node';
import { Node, NodeType } from '~/node/node';
import { postfixNode } from '~/node/postfix/postfix-node';
import { prefixNode, PrefixNode } from '~/node/prefix/prefix-node';
import { sourceNode } from '~/node/source/source-node';
import { OperatorsOrder, operatorsOrders, OperatorType, RecursiveType } from '~/parser/parser-config';
import { Scanner } from '~/parser/scanner/scanner';
import { Source } from '~/parser/source/source';

export const getNode = (source: Source, ctx: ExpressionContext): Node => {
  if (ctx instanceof TokenExpressionContext) return pairExpression(source, ctx);
  if (ctx instanceof ArrayExpressionContext) return arrayNode(source, ctx);
  if (ctx instanceof SourceContext) return sourceNode(ctx.expression().map((x) => getNode(source, x)));
  if (ctx instanceof BodyExpressionContext) return bodyNode(source, ctx);
  if (ctx instanceof PairExpressionContext) return pairExpression(source, ctx);

  throw new Error('Not implemented');

  // Issue.errorFromContext(ctx, `Expression tree not found for '${ctx.constructor.name}'`);
};

function pairExpression(source: Source, ctx: ExpressionContext): Node {
  const expressions = flatExpressions(source, ctx);
  collapseOperators(source.text, expressions, operatorsOrders);

  const operator = expressions.find((expression) => is(expression, NodeType.OPERATOR));
  if (operator) {
    throw new Error('Not implemented');
    // Issue.errorFromTree(operator, 'Extra parameter found');
  }

  return expressions[0] as Node;
}

function collapseOperators(text: String2, expressions: Node[], operatorsOrders: OperatorsOrder[]): void {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.MODIFIER) {
      collapseModifierExpression(
        text,
        expressions,
        operatorsOrder.operators[0].split(' '),
        operatorsOrder.recursiveType,
      );
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
        text,
        expressions,
        operatorsStrings,
        operatorsOrder.operatorType,
        operatorsOrder.recursiveType,
      );
      if (operatorIndex >= 0) {
        collapseExpressions(expressions, operatorsOrder.operatorType, operatorIndex);
        collapseOperators(text, expressions, operatorsOrders);
      }
    }
  }
}

// remove because it is like prefix
function collapseModifierExpression(
  text: String2,
  expressions: Node[],
  operators: String2[],
  recursiveType: RecursiveType,
): void {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;
    const modifier = expressions[index];
    const modifierText = text.slice(modifier.startIndex, modifier.stopIndex + 1);
    if (is(modifier, NodeType.OPERATOR) && operators.includes(modifierText)) {
      const next = expressions[index + 1];
      if (next) {
        expressions[index] = {
          type: NodeType.PREFIX,
          startIndex: modifier.startIndex,
          stopIndex: next.stopIndex,
          operator: modifier,
          expression: next,
        } as PrefixNode;
        expressions.splice(index + 1, 1);
        collapseModifierExpression(text, expressions, operators, recursiveType);

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
  text: String2,
  expressions: Node[],
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Integer {
  for (let i = 0; i < expressions.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : expressions.length - i - 1;

    const operator = expressions[index];
    const operatorText = text.slice(operator.startIndex, operator.stopIndex + 1);

    if (is(operator, NodeType.OPERATOR) && operators.includes(operatorText)) {
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

function flatExpressions(source: Source, ctx: ExpressionContext): Node[] {
  if (ctx instanceof PairExpressionContext) {
    return ctx.expression().flatMap((x) => flatExpressions(source, x));
  }

  if (ctx instanceof TokenExpressionContext) {
    const antlrTokens = ctx.TOKEN();
    const startIndex = antlrTokens[0].payload.startIndex;
    const stopIndex = antlrTokens[antlrTokens.length - 1].payload.stopIndex;

    const sourceName = antlrTokens[0].payload.inputStream?.sourceName;
    const location = (sourceName !== '<unknown>' && sourceName) || null;
    const source = Source.fromText(String(antlrTokens[0].payload.inputStream), location);
    const lexer = new Scanner(source, startIndex, stopIndex);
    const tokens = lexer.nodes().filter((x) => x.type !== NodeType.WHITESPACE && x.type !== NodeType.JOINING);
    return tokens;
  }

  return [getNode(source, ctx)];
}

export function is<T extends Node = Node>(node: Node, nodeType: NodeType | String2): node is T {
  return node?.type === nodeType;
}
