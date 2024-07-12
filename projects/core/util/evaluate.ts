import {$, is} from '../$';
import {Anything, Nothing, Something, String2, nothing} from '../../lib/types';
import {Node} from '../analyzer/node';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | Nothing, argsMap: {[key: String2]: Something} = {}): Anything {
  if (!node) {
    return nothing;
  }

  if (is(node, $.ParenGroupNode)) {
    return node.items.map((x) => evaluate(x.value ?? nothing));
  }

  if (is(node, $.IntegerNode)) {
    return node.value;
  }

  if (is(node, $.StringNode) || is(node, $.CharNode)) {
    return node.content?.text;
  }

  if (is(node, $.InfixNode)) {
    const a = evaluate(node.left, argsMap);
    const b = evaluate(node.right, argsMap);
    const operator = (node.operator.text === '^' && '**') || node.operator.text;

    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }

  if (is(node, $.PrefixNode)) {
    const a = evaluate(node.value, argsMap);

    return eval(`${node.operator.text}${escapeToString(a)}`);
  }

  if (is(node, $.IdNode)) {
    if (argsMap[node.text]) {
      return argsMap[node.text];
    }

    throw new Error('Not implemented');
  }

  throw new Error('Not implemented');
}
