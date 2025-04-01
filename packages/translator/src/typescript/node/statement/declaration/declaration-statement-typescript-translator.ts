import {
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $IdNode,
  DeclarationStatementNode,
  StatementNode,
  TYPE,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {translateTypescriptBody, translateTypescriptType, translateTypescriptValue} from '#translator';
import {is} from '#typing';

enum DeclarationType {
  Variable,
  Attribute,
  Parameter,
}

export function translateTypescriptDeclarationStatement(node: StatementNode): Text {
  if (!is(node, $DeclarationStatementNode())) {
    return newText(`/* error type declaration */`);
  }

  if (node.keyword?.text.equals(TYPE)) {
    return translateTypeDeclaration(node);
  }

  return translateValueDeclaration(node, DeclarationType.Variable);
}

function translateTypeDeclaration(node: DeclarationStatementNode): Text {
  if (node.assignment?.expression) {
    const assignment = translateTypescriptValue(node.assignment.expression);

    return newText(`type ${node.id.text} = ${assignment}`);
  }

  const body = translateAttributes(node.body?.children ?? newArrayData());

  return newText(`type ${node.id.text} = ${body}`);
}

function translateAttributes(body: ArrayData<StatementNode>): Text {
  const translatedBody = newText(
    body.map((x) => translateValueDeclaration(x, DeclarationType.Attribute)),
    newText('\n'),
  );

  return newText(`{\n${translatedBody.margin(2)}\n}\n`);
}

function translateValueDeclaration(node: StatementNode, declarationType: DeclarationType): Text {
  if (
    (declarationType === DeclarationType.Attribute || declarationType === DeclarationType.Parameter) &&
    is(node, $ExpressionStatementNode()) &&
    is(node.expression, $IdNode())
  ) {
    return newText(`${node.expression.text}`);
  }

  if (!is(node, $DeclarationStatementNode()) || !node.id) {
    return newText(`/* error value declaration */`);
  }

  if (node.parameters) {
    return translateToFunction(node, declarationType);
  }

  const keyword = node.keyword
    ? newText(`${node.keyword?.text} `)
    : declarationType === DeclarationType.Variable
    ? newText('let ')
    : newText();

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

function translateToFunction(node: DeclarationStatementNode, declarationType: DeclarationType): Text {
  if (!node.parameters) {
    return newText();
  }

  let keyword = newText();

  if (declarationType !== DeclarationType.Attribute) {
    keyword = node.assignment?.expression ? newText(`const `) : newText(`function `);
  }

  const parameters = newText(
    node.parameters.items
      .map((x) => x.statements.first())
      .map((x) => (x ? translateValueDeclaration(x, DeclarationType.Parameter) : newText())),
    newText(', '),
  );

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptType(node.annotation.expression)}`);
  }

  if (node.assignment?.expression) {
    const value = newText(
      ` = ${node.parameters.open.text}${parameters}${
        node.parameters.close?.text ?? ''
      }${type} => ${translateTypescriptType(node.assignment.expression)}`,
    );

    return newText(`${keyword}${node.id.text}${value}`);
  }

  const body = translateTypescriptBody(node.body?.children ?? newArrayData());

  return newText(
    `${keyword}${node.id.text}${node.parameters.open.text}${parameters}${
      node.parameters.close?.text ?? ''
    }${type} ${body}`,
  );
}
