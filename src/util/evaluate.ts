import { Anything, Nothing, String2, nothing } from '../lib/core';
import { CharNode } from '../syntax/node/char/char-node';
import { GroupNode } from '../syntax/node/group/group-node';
import { IdNode } from '../syntax/node/id/id-node';
import { InfixNode } from '../syntax/node/infix/infix-node';
import { IntegerNode } from '../syntax/node/integer/integer-node';
import { $Node, Node } from '../syntax/node/node';
import { PrefixNode } from '../syntax/node/prefix/prefix-node';
import { StringNode } from '../syntax/node/string/string-node';
import { is } from '../syntax/util/is';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | Nothing, argsMap = {}): Anything {
  if (!node) {
    return nothing;
  }

  if (is<GroupNode>(node, $Node.GROUP)) {
    return node.items.map((x) => evaluate(x ?? nothing));
  }

  if (is<IntegerNode>(node, $Node.INTEGER)) {
    return Number(node.text);
  }

  if (is<StringNode>(node, $Node.STRING) || is<CharNode>(node, $Node.CHAR)) {
    return node.text.slice(1, -1);
  }

  if (is<InfixNode>(node, $Node.INFIX)) {
    const a = evaluate(node.left, argsMap);
    const b = evaluate(node.right, argsMap);
    const operator = (node.operator.text === '^' && '**') || node.operator.text;

    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }

  if (is<PrefixNode>(node, $Node.PREFIX)) {
    const a = evaluate(node.value, argsMap);

    return eval(`${node.operator.text}${escapeToString(a)}`);
  }

  if (is<IdNode>(node, $Node.ID)) {
    if (argsMap[node.text]) {
      return argsMap[node.text];
    }

    throw new Error('Not implemented');
  }

  throw new Error('Not implemented');
}
