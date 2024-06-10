import {Anything, Nothing, String2, nothing} from '../../lib/types';
import {GroupNode} from '../analyzer/node/group/group-node';
import {$Node, Node, is} from '../analyzer/node/node';
import {InfixNode} from '../analyzer/node/syntax/infix/infix-node';
import {PrefixNode} from '../analyzer/node/syntax/prefix/prefix-node';
import {CharNode} from '../analyzer/node/token/char/char-node';
import {IdNode} from '../analyzer/node/token/id/id-node';
import {IntegerNode} from '../analyzer/node/token/integer/integer-node';
import {StringNode} from '../analyzer/node/token/string/string-node';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | Nothing, argsMap = {}): Anything {
  if (!node) {
    return nothing;
  }

  if (is<GroupNode>(node, $Node.GROUP)) {
    return node.items.map((x) => evaluate(x.value ?? nothing));
  }

  if (is<IntegerNode>(node, $Node.INTEGER)) {
    return node.value;
  }

  if (is<StringNode>(node, $Node.STRING) || is<CharNode>(node, $Node.CHAR)) {
    return node.value;
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
