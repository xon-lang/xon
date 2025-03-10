import {
  $CharacterNode,
  $FloatNode,
  $GroupNode,
  $IdNode,
  $InfixNode,
  $IntegerNode,
  $InvokeNode,
  $MemberNode,
  $PostfixNode,
  $PrefixNode,
  $StringNode,
  Node,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptValue(node: Node): Text {
  if (is(node, $IntegerNode())) {
    return node.contentNode.text;
  }

  if (is(node, $FloatNode())) {
    const integer = node.integer.text;
    const fractional = node.fraction?.text ?? 0;

    return newText(`${integer}.${fractional}`);
  }

  if (is(node, $CharacterNode())) {
    if (node.content && node.content.text.count() === 1) {
      return newText(`'${node.content.text}'`);
    }

    return newText('/* error character */');
  }

  if (is(node, $StringNode())) {
    if (node.content) {
      return newText(`"${node.content.text}"`);
    }

    return newText('/* error string */');
  }

  if (is(node, $IdNode())) {
    return node.text;
  }

  if (is(node, $MemberNode())) {
    const instance = translateTypescriptValue(node.instance);
    const id = node.id ?? newText('/* error member id */');

    return newText(`${instance}.${id}`);
  }

  if (is(node, $InvokeNode())) {
    const instance = translateTypescriptValue(node.instance);
    const group = translateTypescriptValue(node.group);

    return newText(`${instance}${group}`);
  }

  if (is(node, $GroupNode())) {
    const items = node.items.map((x) =>
      x.value ? translateTypescriptValue(x.value) : newText('/* error item */'),
    );

    return newText(`${node.open.text}${items}${node.close?.text ?? ''}`);
  }

  if (is(node, $PrefixNode())) {
    if (!node.value) {
      return newText('/* error prefix */');
    }

    const value = translateTypescriptValue(node.value);

    return newText(`${node.operator.text}${value}`);
  }

  if (is(node, $InfixNode())) {
    if (!node.left || !node.right) {
      return newText('/* error infix */');
    }

    const left = translateTypescriptValue(node.left);
    const right = translateTypescriptValue(node.right);

    return newText(`${left}${node.operator.text}${right}`);
  }

  if (is(node, $PostfixNode())) {
    if (!node.value) {
      return newText('/* error postfix */');
    }

    const value = translateTypescriptValue(node.value);

    return newText(`${value}${node.operator.text}`);
  }

  return newText('/* error value */');
}
