import { Issue } from '../issue-service/issue';
import { none } from '../lib/core';
import { ExpressionTree } from '../tree/expression/expression-tree';
import { IdExpressionTree } from '../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../tree/expression/literal/literal-expression-tree';
import { ParenthesizedExpressionTree } from '../tree/expression/parenthesized/parenthesized-expression-tree';
import { PrefixExpressionTree } from '../tree/expression/prefix/prefix-expression-tree';

const escapeIfString = (s: unknown) => (typeof s === 'string' ? `\`${s}\`` : s);

export const evaluate = (tree: ExpressionTree, argsMap = {}): unknown => {
  if (!tree) return none;

  if (tree instanceof LiteralExpressionTree) return tree.literal.value;
  if (tree instanceof ParenthesizedExpressionTree) return evaluate(tree.expression);
  if (tree instanceof InfixExpressionTree) {
    const a = evaluate(tree.left, argsMap);
    const b = evaluate(tree.right, argsMap);
    const o = tree.name.text === '^' ? '**' : tree.name.text;
    return eval(`${escapeIfString(a)} ${o} ${escapeIfString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    const a = evaluate(tree.value, argsMap);
    return eval(`${tree.operator.text}${escapeIfString(a)}`);
  }
  if (tree instanceof IdExpressionTree) {
    if (tree.name.text in argsMap) return argsMap[tree.name.text];
    Issue.errorFromTree(tree, `Undefined key: ${tree.name}`);
  }

  Issue.errorFromTree(tree, 'Unsupported operation');
};
