import {
  $ConditionStatementNode,
  $ExpressionStatementNode,
  $ImportStatementNode,
  $ReturnStatementNode,
  $TypeDeclarationNode,
  $ValueDeclarationNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {
  translateTypescriptConditionStatement,
  translateTypescriptExpressionStatement,
  translateTypescriptImportStatement,
  translateTypescriptReturnStatement,
  translateTypescriptTypeDeclarationStatement,
  translateTypescriptValueDeclarationStatement,
} from '#translator';
import {is} from '#typing';

export function translateTypescriptStatement(node: StatementNode): Text {
  if (is(node, $ExpressionStatementNode())) {
    return translateTypescriptExpressionStatement(node);
  }

  if (is(node, $ImportStatementNode())) {
    return translateTypescriptImportStatement(node);
  }

  if (is(node, $TypeDeclarationNode())) {
    return translateTypescriptTypeDeclarationStatement(node);
  }

  if (is(node, $ValueDeclarationNode())) {
    return translateTypescriptValueDeclarationStatement(node);
  }

  if (is(node, $ConditionStatementNode())) {
    return translateTypescriptConditionStatement(node);
  }

  if (is(node, $ReturnStatementNode())) {
    return translateTypescriptReturnStatement(node);
  }

  return newText('/* error statement */');
}
//   export function statementTypescriptTranslate(
//   translator: TypescriptTranslator,
//   statement: StatementNode,
// ): Text {
//   const statementTranslated = statementTranslate(translator, statement);

//   const bodyTranslated = newText(
//     statement.body.map((node) => newText(translator.statement(node))),
//     NL,
//   ).margin(2);

//   if (!bodyTranslated.isEmpty()) {
//     return statementTranslated.addLastItems(NL).addLastItems(bodyTranslated);
//   }

//   return statementTranslated;
// }

// function statementTranslate(translator: TypescriptTranslator, statement: StatementNode): Text {
//   const node = statement.value;

//   if (is(node, $DeclarationNode())) {
//     if (!node.id.semantic) {
//       return translator.error(node.id);
//     }

//     return declarationTranslate(translator, node.id.semantic);
//   }

//   if (is(node, $ReturnNode())) {
//     if (node.value) {
//       const value = is(node.value.semantic, $ValueSemantic())
//         ? translator.value(node.value.semantic)
//         : translator.error(node.value);

//       return newText(`return ${value}`);
//     }

//     return newText(`return`);
//   }

//   if (node.isExpression && is(node.semantic, $ValueSemantic())) {
//     return translator.value(node.semantic);
//   }

//   return translator.error(node);
// }

// function declarationTranslate(
//   translator: TypescriptTranslator,
//   semantic: Semantic, // DeclarationSemantic
// ): Text {
//   if (is(semantic, $TypeDeclarationSemantic())) {
//     return translator.typeDeclaration(semantic);
//   }

//   if (is(semantic, $ValueDeclarationSemantic())) {
//     return newText('const ').addLastItems(translator.valueDeclaration(semantic));
//   }

//   return translator.error(semantic.nodeLink);
// }

export function translateTypescriptBody(body: ArrayData<StatementNode>): Text {
  const translatedBody = newText(body.map(translateTypescriptStatement), newText('\n'));

  return newText(`{\n${translatedBody.margin(2)}\n}\n`);
}
