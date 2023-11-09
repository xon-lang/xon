import { String2, Unknown2 } from '~/lib/core';
import { GroupNode } from '~/parser/lexical/group/group-node';
import { IdNode } from '~/parser/lexical/id/id-node';
import { InfixNode } from '~/parser/lexical/infix/infix-node';
import { IntegerNode } from '~/parser/lexical/integer/integer-node';
import { Node, NodeType, is } from '~/parser/lexical/node';
import { PrefixNode } from '~/parser/lexical/prefix/prefix-node';
import { StringNode } from '~/parser/lexical/string/string-node';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | null, argsMap = {}): Unknown2 {
  if (!node) {
    return null;
  }

  if (is<GroupNode>(node, NodeType.GROUP)) {
    return node.bodies.map((x) => evaluate(x ?? null));
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
