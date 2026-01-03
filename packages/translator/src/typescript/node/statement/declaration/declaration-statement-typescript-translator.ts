import {$BraceGroupNode, $Node, DeclarationStatementNode, TYPE} from '#analyzer';
import {is, newArrayData, newText, Text} from '#core';
import {
  translateTypescriptAttributes,
  translateTypescriptExpression,
  translateTypescriptValueDeclaration,
  TypescriptDeclarationType,
} from '#translator';

export function translateTypescriptDeclarationStatement(node: DeclarationStatementNode): Text {
  if (node.keyword?.getText().equals(TYPE)) {
    return translateTypeDeclaration(node);
  }

  return translateTypescriptValueDeclaration(node, TypescriptDeclarationType.Variable);
}

function translateTypeDeclaration(node: DeclarationStatementNode): Text {
  const expression = node.assignment?.expression;

  if (expression) {
    if (is(expression, $BraceGroupNode())) {
      const body = translateTypescriptAttributes(
        expression.items.filter((x) => !!x.node).map((x) => x.node!),
      );

      return newText(`export type ${node.id.getText()} = ${body};`);
    }

    const assignment = translateTypescriptExpression(expression, true);

    return newText(`export type ${node.id.getText()} = ${assignment};`);
  }

  const body = translateTypescriptAttributes(node.body?.children ?? newArrayData($Node()));

  return newText(`export type ${node.id.getText()} = ${body};`);
}
