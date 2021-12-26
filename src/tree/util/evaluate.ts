import { Issue } from '../../issue-service/issue';
import { ExpressionTree } from '../expression/expression-tree';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { InfixExpressionTree } from '../expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ParenthesizedExpressionTree } from '../expression/parenthesized/parenthesized-expression-tree';
import { PrefixExpressionTree } from '../expression/prefix/prefix-expression-tree';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evaluate = (node: ExpressionTree, argsMap = {}): unknown => {
  if (node === undefined) return undefined;

  if (node instanceof LiteralExpressionTree) return node.literal.value;
  if (node instanceof ParenthesizedExpressionTree) return evaluate(node.expression);
  if (node instanceof InfixExpressionTree) {
    const a = evaluate(node.left, argsMap);
    const b = evaluate(node.right, argsMap);
    const o = node.id.text === '^' ? '**' : node.id.text;
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }
  if (node instanceof PrefixExpressionTree) {
    const a = evaluate(node.value, argsMap);
    return eval(`${node.id.text}${escapeIfString(a)}`);
  }
  if (node instanceof IdExpressionTree) {
    if (node.id.name.text in argsMap) return argsMap[node.id.name.text];
    Issue.errorFromTree(node, `Undefined key: ${node.id}`);
  }

  Issue.errorFromTree(node, 'Unsupported operation');
};
