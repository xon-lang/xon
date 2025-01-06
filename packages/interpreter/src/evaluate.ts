import {
  $CharNode,
  $IdNode,
  $InfixNode,
  $IntegerNode,
  $ParenGroupNode,
  $PrefixNode,
  $StringNode,
  Node,
} from '#analyzer';
import {Anything, newText, Nothing, nothing, Something, Text} from '#common';
import {is} from '#typing';

export function evaluate(node: Node | Nothing, argsMap: {[key: string]: Something} = {}): Anything {
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
    return node.content?.text.toNativeString();
  }

  if (is(node, $InfixNode)) {
    const a: Anything = evaluate(node.left, argsMap);
    const b: Anything = evaluate(node.right, argsMap);
    const operator: Text = node.operator.text.equals('^') ? newText('**') : node.operator.text;

    return customEval(newText(`${escapeToString(a)} ${operator} ${escapeToString(b)}`));
  }

  if (is(node, $PrefixNode)) {
    const a: Anything = evaluate(node.value, argsMap);

    return customEval(newText(`${node.operator.text.toNativeString()}${escapeToString(a)}`));
  }

  if (is(node, $IdNode)) {
    if (argsMap[node.text.toNativeString()]) {
      return argsMap[node.text.toNativeString()];
    }

    throw new Error('Not implemented');
  }

  throw new Error('Not implemented');
}

function customEval(x: Text) {
  return (0, eval)(x.toNativeString());
}

function escapeToString<T>(value: T): Text {
  return newText((typeof value === 'string' && `\`${value}\``) || String(value));
}
