import { ExpressionTree } from './tree/expression/expression.tree';
import { IdExpressionTree } from './tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from './tree/expression/literal-expression/literal-expression.tree';
import { OperatorExpressionTree } from './tree/expression/operator-expression/operator-expression.tree';
import { ParenthesizedExpressionTree } from './tree/expression/parenthesized-expression/parenthesized-expression.tree';

export const evalExpression = (tree: ExpressionTree, argsMap = {}): unknown => {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionTree) return tree.literal.value;
  if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (tree instanceof OperatorExpressionTree) return evalOperatorExpression(tree, argsMap);

  if (tree instanceof IdExpressionTree) {
    if (tree.name in argsMap) return argsMap[tree.name];
    throw Error(`Undefined key: ${tree.name}`);
  }

  throw new Error('Unsupported operation');
};

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalOperatorExpression = (tree: OperatorExpressionTree, argsMap = {}): unknown => {
  const a = evalExpression(tree.left, argsMap);
  const b = evalExpression(tree.right, argsMap);
  const o = tree.operator === '^' ? '**' : tree.operator;
  // eslint-disable-next-line no-eval
  return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
};
