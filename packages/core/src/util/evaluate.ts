import {$, is} from '../$';
import {Anything, Nothing, Something, String2, nothing} from '../../../lib/types';
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
    return node.content?.text.toString();
  }

  if (is(node, $.InfixNode)) {
    const a: Anything = evaluate(node.left, argsMap);
    const b: Anything = evaluate(node.right, argsMap);
    const operator: String2 = node.operator.text.equals('^') ? '**' : node.operator.text.toString();

    return eval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }

  if (is(node, $.PrefixNode)) {
    const a: Anything = evaluate(node.value, argsMap);

    return eval(`${node.operator.text}${escapeToString(a)}`);
  }

  if (is(node, $.IdNode)) {
    if (argsMap[node.text.toString()]) {
      return argsMap[node.text.toString()];
    }

    throw new Error('Not implemented');
  }

  throw new Error('Not implemented');
}
