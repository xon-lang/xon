import { is } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { String2, Unknown2 } from '~/lib/core';
import { ArrayNode } from '~/node/array/array-node';
import { InfixNode } from '~/node/infix/infix-node';
import { Node, NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(source: Source, node: Node | null, argsMap = {}): Unknown2 {
  if (!node) {
    return null;
  }
  const text = source.nodeText(node);
  if (is<ArrayNode>(node, NodeType.ARRAY)) {
    return node.parameters.map((x) => evaluate(source, x ?? null));
  }
  if (node.type === NodeType.INTEGER) {
    return +text;
  }
  if (node.type === NodeType.STRING) {
    return text.slice(1, -1);
  }
  if (is<InfixNode>(node, NodeType.INFIX)) {
    const a = evaluate(source, node.left, argsMap);
    const b = evaluate(source, node.right, argsMap);
    const operatorText = source.nodeText(node.operator);
    const operator = (operatorText === '^' && '**') || operatorText;

    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (is<PrefixNode>(node, NodeType.PREFIX)) {
    const a = evaluate(source, node.value, argsMap);
    const operatorText = source.nodeText(node.operator);

    return eval(`${operatorText}${escapeToString(a)}`);
  }
  if (node.type === NodeType.ID) {
    if (argsMap[text]) {
      return argsMap[text];
    }
    throw new Error('Not implemented');
  }
  throw new Error('Not implemented');
}
