import {Anything, Nothing, nothing, Something, String2} from '#common';
import {
  $CharNode,
  $IdNode,
  $InfixNode,
  $IntegerNode,
  $ParenGroupNode,
  $PrefixNode,
  $StringNode,
  Node,
} from '#core';
import {is} from '#typing';

export function escapeToString<T>(value: T): String2 {
  return (typeof value === 'string' && `\`${value}\``) || String(value);
}

export function evaluate(node: Node | Nothing, argsMap: {[key: String2]: Something} = {}): Anything {
  if (!node) {
    return nothing;
  }

  if (is(node, $ParenGroupNode)) {
    return node.items.map((x) => evaluate(x.value ?? nothing));
  }

  if (is(node, $IntegerNode)) {
    return node.value;
  }

  if (is(node, $StringNode) || is(node, $CharNode)) {
    return node.content?.text.toString();
  }

  if (is(node, $InfixNode)) {
    const a: Anything = evaluate(node.left, argsMap);
    const b: Anything = evaluate(node.right, argsMap);
    const operator: String2 = node.operator.text.equals('^') ? '**' : node.operator.text.toString();

    return customEval(`${escapeToString(a)} ${operator} ${escapeToString(b)}`);
  }

  if (is(node, $PrefixNode)) {
    const a: Anything = evaluate(node.value, argsMap);

    return customEval(`${node.operator.text}${escapeToString(a)}`);
  }

  if (is(node, $IdNode)) {
    if (argsMap[node.text.toString()]) {
      return argsMap[node.text.toString()];
    }

    throw new Error('Not implemented');
  }

  throw new Error('Not implemented');
}

function customEval(x: String2) {
  return (0, eval)(x);
}
