import {$DeclarationStatementNode, DeclarationStatementNode, StatementNode} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {is} from '#typing';

export function translateTypescriptDeclarationStatement(node: DeclarationStatementNode): Text {
  if (is(node, $DeclarationStatementNode())) {
    const body = translateAttributes(node.body ?? newArrayData());

    return newText(`type ${node.id.text} = ${body}`);
  }

  if (is(node, $ExpressionStatementNode()) && is(node.expression, $IdNode())) {
    return newText(`${node.expression.text}`);
  }

  return newText(`/* error type declaration */`);
}

function translateAttributes(body: ArrayData<StatementNode>): Text {
  const translatedBody = newText(
    body.map((x) => translateValueDeclaration(x, true)),
    newText('\n'),
  );

  return newText(`{\n${translatedBody.margin(2)}\n}\n`);
}

function translateValueDeclaration(node: DeclarationStatementNode, isAttribute: Boolean2): Text {
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

    if (node.annotation?.expression) {
      type = newText(`: ${translateTypescriptType(node.annotation.expression)}`);
    }

    let value = newText();

    if (node.assignment?.expression) {
      value = newText(` = ${translateTypescriptType(node.assignment.expression)}`);
    }

    return newText(`${keyword}${node.id.text}${type}${value}`);
  }

  return newText(`/* error value declaration */`);
}
