import {$DeclarationNode, $ExpressionStatementNode, $IdNode, DeclarationNode, StatementNode} from '#analyzer';
import {Boolean2, newText, Text} from '#common';
import {translateTypescriptType} from '#translator';
import {is} from '#typing';

export function translateTypescriptValueDeclarationStatement(
  node: StatementNode,
  isAttribute: Boolean2,
): Text {
  if (is(node, $DeclarationNode())) {
    return translateValueDeclaration(node, isAttribute);
  }

  if (is(node, $ExpressionStatementNode()) && is(node.expression, $IdNode())) {
    return newText(`${node.expression.text}`);
  }

  return newText(`/* error value2 declaration */`);
}

function translateValueDeclaration(node: DeclarationNode, isAttribute: Boolean2): Text {
  if (!node.id) {
    return newText(`/* error value declaration */`);
  }

  if (is(node.id, $IdNode())) {
    const keyword = node.keyword
      ? newText(`${node.keyword?.text} `)
      : isAttribute
      ? newText()
      : newText('let ');

    let type = newText();

    if (node.type?.expression) {
      type = newText(`: ${translateTypescriptType(node.type.expression)}`);
    }

    let value = newText();

    if (node.value?.expression) {
      value = newText(` = ${translateTypescriptType(node.value.expression)}`);
    }

    return newText(`${keyword}${node.id.text}${type}${value}`);
  }

  return newText(`/* error value declaration */`);
}
