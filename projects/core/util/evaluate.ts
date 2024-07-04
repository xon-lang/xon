import {$, is} from '../$';
import {Anything, Nothing, Something, String2, nothing} from '../../lib/types';
import {CharNode} from '../analyzer/lexical/node/char/char-node';
import {IdNode} from '../analyzer/lexical/node/id/id-node';
import {IntegerNode} from '../analyzer/lexical/node/integer/integer-node';
import {StringNode} from '../analyzer/lexical/node/string/string-node';
import {Node} from '../analyzer/node';
import {GroupNode} from '../analyzer/syntax/group/group-node';
import {InfixNode} from '../analyzer/syntax/node/infix/infix-node';
import {PrefixNode} from '../analyzer/syntax/node/prefix/prefix-node';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | Nothing, argsMap: {[key: String2]: Something} = {}): Anything {
  if (!node) {
    return nothing;
  }

  if (is<GroupNode>(node, $.GroupNode)) {
    return node.items.map((x) => evaluate(x.value ?? nothing));
  }

  if (is<IntegerNode>(node, $.IntegerNode)) {
    return node.value;
  }

  if (is<StringNode>(node, $.StringNode) || is<CharNode>(node, $.CharNode)) {
    return node.value;
  }

  if (is<InfixNode>(node, $.InfixNode)) {
    const a = evaluate(node.left, argsMap);
    const b = evaluate(node.right, argsMap);
    const operator = (node.operator.text === '^' && '**') || node.operator.text;

    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }

  if (is<PrefixNode>(node, $.PrefixNode)) {
    const a = evaluate(node.value, argsMap);

    return eval(`${node.operator.text}${escapeToString(a)}`);
  }

  if (is<IdNode>(node, $.IdNode)) {
    if (argsMap[node.text]) {
      return argsMap[node.text];
    }

    throw new Error('Not implemented');
  }

  throw new Error('Not implemented');
}
