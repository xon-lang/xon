import {newText, Text} from '#common';
import {
  $DeclarationNode,
  $ReturnNode,
  $TypeDeclarationSemantic,
  $ValueDeclarationSemantic,
  $ValueSemantic,
  NL,
  Semantic,
  StatementNode,
} from '#core';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function statementTypescriptTranslate(
  translator: TypescriptTranslator,
  statement: StatementNode,
): Text {
  const statementTranslated = statementTranslate(translator, statement);

  const bodyTranslated = newText(
    statement.body.map((node) => newText(translator.statement(node))),
    NL,
  ).setPadding(2);

  if (!bodyTranslated.isEmpty()) {
    return statementTranslated.addLastItems(NL).addLastItems(bodyTranslated);
  }

  return statementTranslated;
}

function statementTranslate(translator: TypescriptTranslator, statement: StatementNode): Text {
  const node = statement.value;

  if (is(node, $DeclarationNode)) {
    if (!node.id.semantic) {
      return translator.error(node.id);
    }

    return declarationTranslate(translator, node.id.semantic);
  }

  if (is(node, $ReturnNode)) {
    if (node.value) {
      const value = is(node.value.semantic, $ValueSemantic)
        ? translator.value(node.value.semantic)
        : translator.error(node.value);

      return newText(`return ${value}`);
    }

    return newText(`return`);
  }

  if (node.isExpression && is(node.semantic, $ValueSemantic)) {
    return translator.value(node.semantic);
  }

  return translator.error(node);
}

function declarationTranslate(
  translator: TypescriptTranslator,
  semantic: Semantic, // DeclarationSemantic
): Text {
  if (is(semantic, $TypeDeclarationSemantic)) {
    return translator.typeDeclaration(semantic);
  }

  if (is(semantic, $ValueDeclarationSemantic)) {
    return newText('const ').addLastItems(translator.valueDeclaration(semantic));
  }

  return translator.error(semantic.nodeLink);
}
