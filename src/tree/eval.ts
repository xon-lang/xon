import { ExpressionTree } from './expression/expression.tree';
import { IdExpressionTree } from './expression/id-expression/id-expression.tree';
import { InfixExpressionTree } from './expression/infix-expression/infix-expression.tree';
import { LiteralExpressionTree } from './expression/literal-expression/literal-expression.tree';
import { ParenthesizedExpressionTree } from './expression/parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from './expression/pipe-expression/pipe-expression.tree';
import { PrefixExpressionTree } from './expression/prefix-expression/prefix-expression.tree';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalExpression = (tree: ExpressionTree, argsMap = {}): unknown => {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionTree) return tree.literal.value;
  if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
  if (tree instanceof PipeExpressionTree)
    return evalExpression(tree.right, { [tree.arg]: evalExpression(tree.left) });
  if (tree instanceof InfixExpressionTree) {
    const a = evalExpression(tree.left, argsMap);
    const b = evalExpression(tree.right, argsMap);
    const o = tree.id.text === '^' ? '**' : tree.id.text;
    // eslint-disable-next-line no-eval
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    const a = evalExpression(tree.value, argsMap);
    // eslint-disable-next-line no-eval
    return eval(`${tree.id.text}${escapeIfString(a)}`);
  }
  if (tree instanceof IdExpressionTree) {
    if (tree.id.text in argsMap) return argsMap[tree.id.text];
    throw Error(`Undefined key: ${tree.id}`);
  }

  throw new Error('Unsupported operation');
};
