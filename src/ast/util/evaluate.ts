import { Issue } from '../../issue-service/issue';
import { ExpressionNode } from '../expression/expression-node';
import { IdExpressionNode } from '../expression/id/id-expression-node';
import { InfixExpressionNode } from '../expression/infix/infix-expression-node';
import { LiteralExpressionNode } from '../expression/literal/literal-expression-node';
import { ParenthesizedExpressionNode } from '../expression/parenthesized/parenthesized-expression-node';
import { PrefixExpressionNode } from '../expression/prefix/prefix-expression-node';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evaluate = (node: ExpressionNode, argsMap = {}): unknown => {
  if (node === undefined) return undefined;

  if (node instanceof LiteralExpressionNode) return node.literal.value;
  if (node instanceof ParenthesizedExpressionNode) return evaluate(node.expression);
  if (node instanceof InfixExpressionNode) {
    const a = evaluate(node.left, argsMap);
    const b = evaluate(node.right, argsMap);
    const o = node.id.text === '^' ? '**' : node.id.text;
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }
  if (node instanceof PrefixExpressionNode) {
    const a = evaluate(node.value, argsMap);
    return eval(`${node.id.text}${escapeIfString(a)}`);
  }
  if (node instanceof IdExpressionNode) {
    if (node.id.name.text in argsMap) return argsMap[node.id.name.text];
    Issue.errorFromNode(node, `Undefined key: ${node.id}`);
  }

  Issue.errorFromNode(node, 'Unsupported operation');
};