import {
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $IdNode,
  DeclarationStatementNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {
  translateTypescriptExpression,
  translateTypescriptStatement,
  TypescriptDeclarationType,
  TypescriptStatementSeparator,
} from '#translator';
import {is} from '#typing';

export function translateTypescriptValueDeclaration(
  node: StatementNode,
  declarationType: TypescriptDeclarationType,
): Text {
  if (
    (declarationType === TypescriptDeclarationType.Attribute ||
      declarationType === TypescriptDeclarationType.Parameter) &&
    is(node, $ExpressionStatementNode()) &&
    is(node.expression, $IdNode())
  ) {
    return newText(`${node.expression.text}: unknown`);
  }

  if (!is(node, $DeclarationStatementNode()) || !node.id) {
    return newText(`/* error value declaration */`);
  }

  if (node.group) {
    return translateToFunction(node, declarationType);
  }

  const keyword = node.keyword
    ? newText(`${node.keyword?.text} `)
    : declarationType === TypescriptDeclarationType.Variable
    ? newText('export const ')
    : newText();

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptExpression(node.annotation.expression, true)}`);
  }

  let value = newText();

  if (node.assignment?.expression) {
    const assignOperator = declarationType === TypescriptDeclarationType.Attribute ? ': ' : ' = ';
    value = newText(`${assignOperator}${translateTypescriptExpression(node.assignment.expression, false)}`);
  }

  return newText(`${keyword}${node.id.text}${type}${value}`);
}

function translateToFunction(
  node: DeclarationStatementNode,
  declarationType: TypescriptDeclarationType,
): Text {
  if (!node.group) {
    return newText();
  }

  let keyword = newText();

  if (declarationType !== TypescriptDeclarationType.Attribute) {
    keyword = node.assignment?.expression ? newText(`const `) : newText(`function `);
  }

  const parameters = newText(
    node.group.items
      .map((x) => x.statement)
      .map((x) =>
        x ? translateTypescriptValueDeclaration(x, TypescriptDeclarationType.Parameter) : newText(),
      ),
    newText(', '),
  );

  let type = newText();

  if (node.annotation?.expression) {
    type = newText(`: ${translateTypescriptExpression(node.annotation.expression, true)}`);
  }

  if (node.assignment?.expression) {
    const value = newText(
      ` = ${node.group.open.text}${parameters}${
        node.group.close?.text ?? ''
      }${type} => ${translateTypescriptExpression(node.assignment.expression, false)}`,
    );

    return newText(`${keyword}${node.id.text}${value}`);
  }

  let body = newText();

  if (node.body) {
    body = newText(` ${translateTypescriptFunctionBody(node.body.children)}`);
  }

  return newText(
    `${keyword}${node.id.text}${node.group.open.text}${parameters}${
      node.group.close?.text ?? ''
    }${type}${body}`,
  );
}

function translateTypescriptFunctionBody(body: ArrayData<StatementNode>): Text {
  const translatedBody = newText(
    body.map((x) => translateTypescriptStatement(x, TypescriptStatementSeparator.Semicolon)),
    newText('\n'),
  );

  return newText(`{\n${translatedBody.margin(2)}\n}`);
}
