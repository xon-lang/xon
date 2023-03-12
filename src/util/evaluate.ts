import { String2, Unknown2 } from '~/lib/core';
import { Node, NodeType } from '~/parser/lexer/node';
import { ArrayNode } from '~/tree/array/array-expression-tree';
import { InfixNode } from '~/tree/infix/infix-expression-tree';
import { PrefixNode } from '~/tree/prefix/prefix-expression-tree';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(tree: Node | null, argsMap = {}): Unknown2 {
  if (!tree) {
    return null;
  }
  if (tree instanceof ArrayNode) {
    return tree.parameters.map((x) => evaluate(x ?? null));
  }
  if (tree.nodeType === NodeType.INTEGER) {
    return +tree.text;
  }
  if (tree.nodeType === NodeType.STRING) {
    return tree.text.slice(1, -1);
  }
  if (tree instanceof InfixNode) {
    const a = evaluate(tree.left, argsMap);
    const b = evaluate(tree.right, argsMap);
    const operator = (tree.operator.text === '^' && '**') || tree.operator.text;

    // eslint-disable-next-line no-eval
    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (tree instanceof PrefixNode) {
    const a = evaluate(tree.expression, argsMap);

    // eslint-disable-next-line no-eval
    return eval(`${tree.operator.text}${escapeToString(a)}`);
  }
  if (tree.nodeType === NodeType.ID) {
    if (argsMap[tree.text]) {
      return argsMap[tree.text];
    }
    throw new Error('Not implemented');

    // Issue.errorFromTree(tree, `Undefined key '${tree.text}'`);
  }
  throw new Error('Not implemented');
  // Issue.errorFromTree(tree, `Unsupported operation of '${tree.constructor.name}' for '${tree.sourceSpan.getText()}'`);
}
