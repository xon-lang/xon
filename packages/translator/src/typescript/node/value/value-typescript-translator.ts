import {
  $BraceGroupNode,
  $BracketGroupNode,
  $CharacterNode,
  $FloatNode,
  $IdNode,
  $InfixNode,
  $IntegerNode,
  $InvokeNode,
  $MemberNode,
  $ParenGroupNode,
  $PostfixNode,
  $PrefixNode,
  $StringInterpolationNode,
  $StringNode,
  ExpressionStatementNode,
  Node,
} from '#analyzer';
import {newText, Text} from '#common';
import {translateTypescriptAttributes, translateTypescriptStatement} from '#translator';
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
    return newText(`\`${node.content?.text ?? ''}\``);
  }

  if (is(node, $StringInterpolationNode())) {
    const items = node.items.map((x) =>
      newText(
        x.statements.count() > 0
          ? `${x.content?.text ?? ''}\${${translateTypescriptStatement(x.statements.at2(0))}}`
          : `${x.content?.text ?? ''}`,
      ),
    );
    const text = newText(items, newText(''));

    return newText(`\`${text}\``);
  }

  if (is(node, $IdNode())) {
    return typeMapping(node.text);
  }

  if (is(node, $MemberNode())) {
    const instance = translateTypescriptValue(node.instance);
    const id = node.id?.text ?? newText('/* error member id */');

    return newText(`${instance}.${id}`);
  }

  if (is(node, $InvokeNode())) {
    const instance = translateTypescriptValue(node.instance);
    const parameters = newText(
      node.group.items.map((x) =>
        x.statement
          ? translateTypescriptValue((x.statement as ExpressionStatementNode).expression)
          : newText(),
      ),
      newText(', '),
    );

    return newText(`${instance}${node.group.open.text}${parameters}${node.group.close?.text ?? ''}`);
  }

  if (is(node, $ParenGroupNode())) {
    if (node.items.count() !== 1 || !node.items.at(0)?.statement) {
      return newText('/* error group */');
    }

    const expression = (node.items.at(0)?.statement as ExpressionStatementNode).expression;
    const translatedExpression = translateTypescriptValue(expression);

    return newText(`${node.open.text}${translatedExpression}${node.close?.text ?? ''}`);
  }

  if (is(node, $BraceGroupNode())) {
    return translateTypescriptAttributes(
      node.items.filter((x) => !!x.statement).map((x) => x.statement!),
      true,
    );
  }

  if (is(node, $BracketGroupNode())) {
    const items = node.items.map((x) =>
      x.statement ? translateTypescriptValue((x.statement as ExpressionStatementNode).expression) : newText(),
    );
    const text = newText(items, newText(', '));

    return newText(`[${text}]`);
  }

  if (is(node, $PrefixNode())) {
    if (!node.expression) {
      return newText('/* error prefix */');
    }

    const value = translateTypescriptValue(node.expression);

    return newText(`${node.operator.text}${value}`);
  }

  if (is(node, $InfixNode())) {
    const left = translateTypescriptValue(node.left);
    const right = translateTypescriptValue(node.right);
    console.log(JSON.stringify(node.operator.range));

    return newText(`${left} ${node.operator.text} ${right}`);
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

// todo think how to get mapping config
function typeMapping(typeName: Text): Text {
  switch (typeName.toNativeString()) {
    case 'String':
      return newText('string');
    case 'Integer':
      return newText('number');
    case 'Float':
      return newText('number');

    default:
      return typeName;
  }
}
