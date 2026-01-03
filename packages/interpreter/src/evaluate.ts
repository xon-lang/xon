import {
  $CharacterNode,
  $IdNode,
  $InfixNode,
  $IntegerNode,
  $ParenGroupNode,
  $PrefixNode,
  $StringNode,
  ExpressionStatementNode,
  Node,
} from '#analyzer';
import {Anything, is, newText, Nothing, nothing, Something, Text} from '#core';

export function evaluate(node: Node | Nothing, argsMap: {[key: string]: Something} = {}): Anything {
  if (!node) {
    return nothing;
  }

  if (is(node, $ParenGroupNode())) {
    return node.items.map((x) => evaluate((x.node as ExpressionStatementNode).expression ?? nothing));
  }

  if (is(node, $IntegerNode())) {
    return +node.content.getText().toNativeString();
  }

  if (is(node, $StringNode()) || is(node, $CharacterNode())) {
    return node.content?.getText().toNativeString();
  }

  if (is(node, $InfixNode())) {
    const a: Anything = evaluate(node.left, argsMap);
    const b: Anything = evaluate(node.right, argsMap);
    const operator: Text = node.operator.getText().equals('^') ? newText('**') : node.operator.getText();

    return customEval(newText(`${escapeToString(a)} ${operator} ${escapeToString(b)}`));
  }

  if (is(node, $PrefixNode())) {
    const a: Anything = evaluate(node.expression, argsMap);

    return customEval(newText(`${node.operator.getText().toNativeString()}${escapeToString(a)}`));
  }

  if (is(node, $IdNode())) {
    if (argsMap[node.getText().toNativeString()]) {
      return argsMap[node.getText().toNativeString()];
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
