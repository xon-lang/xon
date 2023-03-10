import { Issue } from '~/issue/issue';
import { String2, Unknown2 } from '~/lib/core';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { isIdToken, isIntegerToken, isStringToken } from '~/tree/expression/expression-tree-helper';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(tree: ExpressionTree | null, argsMap = {}): Unknown2 {
  if (!tree) {
    return null;
  }
  if (tree instanceof ArrayExpressionTree) {
    return tree.parameters.map((x) => evaluate(x ?? null));
  }
  if (isIntegerToken(tree)) {
    return +tree.name.text;
  }
  if (isStringToken(tree)) {
    return tree.name.text.slice(1, -1);
  }
  if (tree instanceof InfixExpressionTree) {
    const a = evaluate(tree.left, argsMap);
    const b = evaluate(tree.right, argsMap);
    const operator = (tree.operator.text === '^' && '**') || tree.operator.text;

    // eslint-disable-next-line no-eval
    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    const a = evaluate(tree.expression, argsMap);

    // eslint-disable-next-line no-eval
    return eval(`${tree.operator.text}${escapeToString(a)}`);
  }
  if (isIdToken(tree)) {
    if (argsMap[tree.name.text]) {
      return argsMap[tree.name.text];
    }
    Issue.errorFromTree(tree, `Undefined key '${tree.name.text}'`);
  }
  Issue.errorFromTree(tree, `Unsupported operation of '${tree.constructor.name}' for '${tree.sourceSpan.getText()}'`);
}
