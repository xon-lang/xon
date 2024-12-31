import {newText, String2} from '#common';
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
): String2 {
  const statementTranslated = statementTranslate(translator, statement);

  const bodyTranslated = newText(
    statement.body.map((node) => translator.statement(node)).join(NL.toNativeString()),
  )
    .setPadding(2)
    .toNativeString();

  if (bodyTranslated.length > 0) {
    return statementTranslated + NL + bodyTranslated;
  }

  return statementTranslated;
}

function statementTranslate(translator: TypescriptTranslator, statement: StatementNode): String2 {
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

      return `return ${value}`;
    }

    return `return`;
  }

  if (node.isExpression && is(node.semantic, $ValueSemantic)) {
    return translator.value(node.semantic);
  }

  return translator.error(node);
}

function declarationTranslate(
  translator: TypescriptTranslator,
  semantic: Semantic, // DeclarationSemantic
): String2 {
  if (is(semantic, $TypeDeclarationSemantic)) {
    return translator.typeDeclaration(semantic);
  }

  if (is(semantic, $ValueDeclarationSemantic)) {
    return 'const ' + translator.valueDeclaration(semantic);
  }

  return translator.error(semantic.nodeLink);
}
