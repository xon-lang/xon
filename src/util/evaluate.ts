import { String2, Unknown2 } from '~/lib/core';
import { ArrayNode } from '~/node/array/array-node';
import { InfixNode } from '~/node/infix/infix-node';
import { Node, NodeType } from '~/node/node';
import { is } from '~/node/node-helper';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { Source } from '~/parser/source/source';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(source: Source, tree: Node | null, argsMap = {}): Unknown2 {
  if (!tree) {
    return null;
  }
  const text = source.nodeText(tree);
  if (is<ArrayNode>(tree, NodeType.ARRAY)) {
    return tree.parameters.map((x) => evaluate(source, x ?? null));
  }
  if (tree.type === NodeType.INTEGER) {
    return +text;
  }
  if (tree.type === NodeType.STRING) {
    return text.slice(1, -1);
  }
  if (is<InfixNode>(tree, NodeType.INFIX)) {
    const a = evaluate(source, tree.left, argsMap);
    const b = evaluate(source, tree.right, argsMap);
    const operatorText = source.nodeText(tree.operator);
    const operator = (operatorText === '^' && '**') || operatorText;

    // eslint-disable-next-line no-eval
    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (is<PrefixNode>(tree, NodeType.PREFIX)) {
    const a = evaluate(source, tree.expression, argsMap);
    const operatorText = source.nodeText(tree.operator);

    // eslint-disable-next-line no-eval
    return eval(`${operatorText}${escapeToString(a)}`);
  }
  if (tree.type === NodeType.ID) {
    if (argsMap[text]) {
      return argsMap[text];
    }
    throw new Error('Not implemented');

    // Issue.errorFromTree(tree, `Undefined key '${text}'`);
  }
  throw new Error('Not implemented');
  // Issue.errorFromTree(tree, `Unsupported operation of '${tree.constructor.name}' for '${tree.sourceSpan.getText()}'`);
}
