import { ExpressionNode } from './expression/expression-node';
import { IdExpressionNode } from './expression/id/id-expression-node';
import { InfixExpressionNode } from './expression/infix/infix-expression-node';
import { LiteralExpressionNode } from './expression/literal/literal-expression-node';
import { ParenthesizedExpressionNode } from './expression/parenthesized/parenthesized-expression-node';
import { PipeExpressionTree } from './expression/pipe/pipe-expression-node';
import { PrefixExpressionNode } from './expression/prefix/prefix-expression-node';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalExpression = (tree: ExpressionNode, argsMap = {}): unknown => {
  if (tree === undefined) return undefined;

  if (tree instanceof LiteralExpressionNode) return tree.literal.value;
  if (tree instanceof ParenthesizedExpressionNode) return evalExpression(tree.expression);
  if (tree instanceof PipeExpressionTree)
    return evalExpression(tree.right, { [tree.id.text]: evalExpression(tree.left) });
  if (tree instanceof InfixExpressionNode) {
    const a = evalExpression(tree.left, argsMap);
    const b = evalExpression(tree.right, argsMap);
    const o = tree.id.text === '^' ? '**' : tree.id.text;
    // eslint-disable-next-line no-eval
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }
  if (tree instanceof PrefixExpressionNode) {
    const a = evalExpression(tree.value, argsMap);
    // eslint-disable-next-line no-eval
    return eval(`${tree.id.text}${escapeIfString(a)}`);
  }
  if (tree instanceof IdExpressionNode) {
    if (tree.id.text in argsMap) return argsMap[tree.id.text];
    throw Error(`Undefined key: ${tree.id}`);
  }

  throw new Error('Unsupported operation');
};
