import {
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $IdNode,
  $Node,
  DeclarationStatementNode,
  StatementNode,
  TYPE,
} from '#analyzer';
import {ArrayData, newArrayData, newText, Text} from '#common';
import {
  translateTypescriptBody,
  translateTypescriptType,
  translateTypescriptValue,
  TypescriptDeclarationType,
} from '#translator';
import {is} from '#typing';

export function translateTypescriptDeclarationStatement(node: DeclarationStatementNode): Text {
  if (node.keyword?.text.equals(TYPE)) {
    return translateTypeDeclaration(node);
  }

  return translateValueDeclaration(node, TypescriptDeclarationType.Variable);
}

function translateTypeDeclaration(node: DeclarationStatementNode): Text {
  if (node.assignment?.expression) {
    const assignment = translateTypescriptValue(node.assignment.expression);

    return newText(`type ${node.id.text} = ${assignment};`);
  }

  const body = translateAttributes(node.body?.children ?? newArrayData($Node()));

  return newText(`type ${node.id.text} = ${body};\n`);
}

function translateAttributes(attributes: ArrayData<StatementNode>, useComma = false): Text {
  const separator = useComma ? ',\n' : ';\n';
  const translatedAttributes = newText(
    attributes.map((x) => translateValueDeclaration(x, TypescriptDeclarationType.Attribute)),
    newText(separator),
  );
  const lastSeparator = translatedAttributes.count() > 0 ? separator : '\n';

  return newText(`{\n${translatedAttributes.margin(2)}${lastSeparator}}`);
}

function translateValueDeclaration(node: StatementNode, declarationType: TypescriptDeclarationType): Text {
  if (
    (declarationType === TypescriptDeclarationType.Attribute ||
      declarationType === TypescriptDeclarationType.Parameter) &&
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
    : declarationType === TypescriptDeclarationType.Variable
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

function translateToFunction(
  node: DeclarationStatementNode,
  declarationType: TypescriptDeclarationType,
): Text {
  if (!node.parameters) {
    return newText();
  }

  let keyword = newText();

  if (declarationType !== TypescriptDeclarationType.Attribute) {
    keyword = node.assignment?.expression ? newText(`const `) : newText(`function `);
  }

  const parameters = newText(
    node.parameters.items
      .map((x) => x.statements.first())
      .map((x) => (x ? translateValueDeclaration(x, TypescriptDeclarationType.Parameter) : newText())),
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

  const body = translateTypescriptBody(node.body?.children ?? newArrayData($Node()));

  return newText(
    `${keyword}${node.id.text}${node.parameters.open.text}${parameters}${
      node.parameters.close?.text ?? ''
    }${type} ${body}`,
  );
}
