/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { ExpressionTree } from './tree/expression/expression.tree';
import { IdExpressionTree } from './tree/expression/id-expression/id-expression.tree';
import { InfixExpressionTree } from './tree/expression/infix-expression/infix-expression.tree';
import { LiteralExpressionTree } from './tree/expression/literal-expression/literal-expression.tree';
import { ParenthesizedExpressionTree } from './tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { PostfixExpressionTree } from './tree/expression/postfix-expression/postfix-expression.tree';
import { PrefixExpressionTree } from './tree/expression/prefix-expression/prefix-expression.tree';

export const evalExpression = (tree: ExpressionTree, argsMap = new Map()): unknown => {
  if (tree === undefined) return undefined;

  if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
  if (tree instanceof LiteralExpressionTree) return tree.literal.value;
  if (tree instanceof InfixExpressionTree) return evalInfixExpression(tree, argsMap);
  if (tree instanceof PrefixExpressionTree) return evalPrefixExpression(tree, argsMap);
  if (tree instanceof PostfixExpressionTree) return evalPostfixExpression(tree, argsMap);

  if (tree instanceof IdExpressionTree) {
    if (argsMap.has(tree.name)) return argsMap.get(tree.name);
    throw Error(`Undefined key: ${tree.name}`);
  }

  throw new Error('Unsupported operation');
};

const escapeIfString = (s) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalInfixExpression = (
  tree: InfixExpressionTree,
  argsMap: Map<string, unknown>,
): unknown => {
  const a = evalExpression(tree.left, argsMap);
  const b = evalExpression(tree.right, argsMap);
  const o = tree.operator === '^' ? '**' : tree.operator;
  return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
};

export const evalPrefixExpression = (
  tree: PrefixExpressionTree,
  argsMap: Map<string, unknown>,
): unknown => {
  const value = evalExpression(tree.value, argsMap);
  return eval(`${tree.operator}${escapeIfString(value)}`);
};

export const evalPostfixExpression = (
  tree: PostfixExpressionTree,
  argsMap: Map<string, unknown>,
): unknown => {
  const value = evalExpression(tree.value, argsMap);
  return eval(`${escapeIfString(value)}${tree.operator}`);
};
