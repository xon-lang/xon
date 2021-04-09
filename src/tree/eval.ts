import { ExpressionTree } from './expression/expression.tree';
import { IdExpressionTree } from './expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from './expression/literal-expression/literal-expression.tree';
import { OperatorExpressionTree } from './expression/operator-expression/operator-expression.tree';
import { ParenthesizedExpressionTree } from './expression/parenthesized-expression/parenthesized-expression.tree';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalExpression = (tree: ExpressionTree, argsMap = {}): unknown => {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionTree) return tree.literal.value;
  if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
  if (tree instanceof OperatorExpressionTree) {
    const a = evalExpression(tree.left, argsMap);
    const b = evalExpression(tree.right, argsMap);
    const o = tree.operator === '^' ? '**' : tree.operator;
    // eslint-disable-next-line no-eval
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }

  if (tree instanceof IdExpressionTree) {
    if (tree.name in argsMap) return argsMap[tree.name];
    throw Error(`Undefined key: ${tree.name}`);
  }

  throw new Error('Unsupported operation');
};
