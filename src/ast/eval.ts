import { ExpressionNode } from './expression/expression-node';
import { IdExpressionNode } from './expression/id/id-expression-node';
import { InfixExpressionNode } from './expression/infix/infix-expression-node';
import { LiteralExpressionNode } from './expression/literal/literal-expression-node';
import { ParenthesizedExpressionNode } from './expression/parenthesized/parenthesized-expression-node';
import { PrefixExpressionNode } from './expression/prefix/prefix-expression-node';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evalExpression = (node: ExpressionNode, argsMap = {}): unknown => {
  if (node === undefined) return undefined;

  if (node instanceof LiteralExpressionNode) return node.literal.value;
  if (node instanceof ParenthesizedExpressionNode) return evalExpression(node.expression);
  if (node instanceof InfixExpressionNode) {
    const a = evalExpression(node.left, argsMap);
    const b = evalExpression(node.right, argsMap);
    const o = node.id.text === '^' ? '**' : node.id.text;
    console.log(node.ctx.text);
    
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }
  if (node instanceof PrefixExpressionNode) {
    const a = evalExpression(node.value, argsMap);
    return eval(`${node.id.text}${escapeIfString(a)}`);
  }
  if (node instanceof IdExpressionNode) {
    if (node.id.name.text in argsMap) return argsMap[node.id.name.text];
    node.raiseError(`Undefined key: ${node.id}`);
  }

  node.raiseError('Unsupported operation');
};
