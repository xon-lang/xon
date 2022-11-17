import { Issue } from '~/issue/issue';
import { String2, Unknown2 } from '~/lib/core';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { GroupExpressionTree } from '~/tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';

export function escapeToString<T>(value: T): String2 {
  return typeof value === 'string' && `\`${value}\`` || String(value);
}

export function evaluate(tree: ExpressionTree | null, argsMap = {}): Unknown2 {
  if (!tree) {
    return null;
  }
  if (tree instanceof ArrayExpressionTree) {
    return tree.arguments.map((x) => evaluate(x.value ?? null));
  }
  if (tree instanceof LiteralExpressionTree) {
    return tree.literal.value;
  }
  if (tree instanceof GroupExpressionTree) {
    return evaluate(tree.expression);
  }
  if (tree instanceof InfixExpressionTree) {
    const a = evaluate(tree.left, argsMap);
    const b = evaluate(tree.right, argsMap);
    const operator = tree.name.text === '^' && '**' || tree.name.text;
    // eslint-disable-next-line no-eval
    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    const a = evaluate(tree.value, argsMap);
    // eslint-disable-next-line no-eval
    return eval(`${tree.name.text}${escapeToString(a)}`);
  }
  if (tree instanceof IdExpressionTree) {
    if (argsMap[tree.name.text]) {
      return argsMap[tree.name.text];
    }
    Issue.errorFromTree(tree, `Undefined key '${tree.name}'`);
  }
  Issue.errorFromTree(tree, 'Unsupported operation');
}
