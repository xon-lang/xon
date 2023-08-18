import { is } from '~/analysis/is';
import { GroupNode } from '~/analysis/lexical/node/group/group-node';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { InfixNode } from '~/analysis/lexical/node/infix/infix-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { PrefixNode } from '~/analysis/lexical/node/prefix/prefix-node';
import { StringNode } from '~/analysis/lexical/node/string/string-node';
import { Node, NodeType } from '~/analysis/node';
import { String2, Unknown2 } from '~/lib/core';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | null, argsMap = {}): Unknown2 {
  if (!node) {
    return null;
  }
  if (is<GroupNode>(node, NodeType.ARRAY)) {
    return node.items.map((x) => evaluate(x ?? null));
  }
  if (is<IntegerNode>(node, NodeType.INTEGER)) {
    return Number(node.text);
  }
  if (is<StringNode>(node, NodeType.STRING)) {
    return node.text.slice(1, -1);
  }
  if (is<InfixNode>(node, NodeType.INFIX)) {
    const a = evaluate(node.left, argsMap);
    const b = evaluate(node.right, argsMap);
    const operator = (node.operator.text === '^' && '**') || node.operator.text;

    // eslint-disable-next-line no-eval
    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }
  if (is<PrefixNode>(node, NodeType.PREFIX)) {
    const a = evaluate(node.value, argsMap);

    // eslint-disable-next-line no-eval
    return eval(`${node.operator.text}${escapeToString(a)}`);
  }
  if (is<IdNode>(node, NodeType.ID)) {
    if (argsMap[node.text]) {
      return argsMap[node.text];
    }
    throw new Error('Not implemented');
  }
  throw new Error('Not implemented');
}
