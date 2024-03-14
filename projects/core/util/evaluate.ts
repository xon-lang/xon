import {Anything, Nothing, String2, nothing} from '../lib/core';
import {$Node, Node, is} from '../parser/node/node';
import {GroupNode} from '../parser/node/syntax/group/group-node';
import {InfixNode} from '../parser/node/syntax/infix/infix-node';
import {PrefixNode} from '../parser/node/syntax/prefix/prefix-node';
import {IdNode} from '../parser/node/token/id/id-node';
import {CharLiteralNode} from '../parser/node/token/literal/char/char-literal-node';
import {IntegerLiteralNode} from '../parser/node/token/literal/integer/integer-literal-node';
import {StringLiteralNode} from '../parser/node/token/literal/string/string-literal-node';

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

  if (is<IntegerLiteralNode>(node, $Node.INTEGER)) {
    return Number(node.text);
  }

  if (is<StringLiteralNode>(node, $Node.STRING) || is<CharLiteralNode>(node, $Node.CHAR)) {
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

    // todo use context issue manager
    throw new Error('Not implemented');
  }

  // todo use context issue manager
  throw new Error('Not implemented');
}
