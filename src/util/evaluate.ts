import { Issue } from '~/issue';
import { String2, Unknown2 } from '~/lib';
import {
  ArrayExpressionTree,
  ExpressionTree,
  GroupExpressionTree,
  IdExpressionTree,
  InfixExpressionTree,
  LiteralExpressionTree,
  PrefixExpressionTree,
} from '~/tree/expression';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(tree: ExpressionTree | null, argsMap = {}): Unknown2 {
  if (!tree) {
    return null;
  }
  if (tree instanceof ArrayExpressionTree) {
    return tree.arguments.map((x) => evaluate(x.value));
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
    const operator = (tree.name.text === '^' && '**') || tree.name.text;
    // eslint-disable-next-line no-eval
    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    const a = evaluate(tree.value, argsMap);
    // eslint-disable-next-line no-eval
    return eval(`${tree.name.text}${escapeToString(a)}`);
  }
  if (tree instanceof IdExpressionTree) {
    if (tree.name.text in argsMap) {
      return argsMap[tree.name.text];
    }
    Issue.errorFromTree(tree, `Undefined key '${tree.name}'`);
  }
  Issue.errorFromTree(tree, 'Unsupported operation');
}
