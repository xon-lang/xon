import { Anything, String2 } from '../lib/core';
import { CharNode } from '../parser/node/char/char-node';
import { GroupNode } from '../parser/node/group/group-node';
import { IdNode } from '../parser/node/id/id-node';
import { InfixNode } from '../parser/node/infix/infix-node';
import { IntegerNode } from '../parser/node/integer/integer-node';
import { Node } from '../parser/node/node';
import { NodeType } from '../parser/node/node-type';
import { PrefixNode } from '../parser/node/prefix/prefix-node';
import { StringNode } from '../parser/node/string/string-node';
import { is } from '../parser/util/is';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | null, argsMap = {}): Anything {
  if (!node) {
    return null;
  }

  if (is<GroupNode>(node, NodeType.GROUP)) {
    return node.items.map((x) => evaluate(x ?? null));
  }

  if (is<IntegerNode>(node, NodeType.INTEGER)) {
    return Number(node.text);
  }

  if (is<StringNode>(node, NodeType.STRING) || is<CharNode>(node, NodeType.CHAR)) {
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
