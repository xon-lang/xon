import { ExpressionTree } from './expression/expression.tree';
import { IdExpressionTree } from './expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from './expression/literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from './expression/logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from './expression/logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from './expression/logical-or-expression/logical-or-expression.tree';
import { NegativeExpressionTree } from './expression/prefix-expression/prefix-expression.tree';
import { OperatorExpressionTree } from './expression/infix-expression/infix-expression.tree';
import { ParenthesizedExpressionTree } from './expression/parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from './expression/pipe-expression/pipe-expression.tree';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalExpression = (tree: ExpressionTree, argsMap = {}): unknown => {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionTree) return tree.literal.value;
  if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
  if (tree instanceof LogicalAndExpressionTree)
    return evalExpression(tree.left, argsMap) && evalExpression(tree.right, argsMap);
  if (tree instanceof LogicalOrExpressionTree)
    return evalExpression(tree.left, argsMap) || evalExpression(tree.right, argsMap);
  if (tree instanceof NegativeExpressionTree) return -evalExpression(tree.value, argsMap);
  if (tree instanceof LogicalNotExpressionTree) return !evalExpression(tree.value, argsMap);
  if (tree instanceof PipeExpressionTree)
    return evalExpression(tree.right, { [tree.arg]: evalExpression(tree.left) });
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
