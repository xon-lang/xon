import {
  $ConditionStatementNode,
  $DeclarationStatementNode,
  $ExpressionStatementNode,
  $ImportStatementNode,
  $ReturnStatementNode,
  StatementNode,
} from '#analyzer';
import {ArrayData, newCharacter, newText, Text} from '#common';
import {
  translateTypescriptConditionStatement,
  translateTypescriptDeclarationStatement,
  translateTypescriptExpressionStatement,
  translateTypescriptImportStatement,
  translateTypescriptReturnStatement,
} from '#translator';
import {is} from '#typing';

export enum TypescriptStatementSeparator {
  None = 'None',
  Comma = 'Comma',
  Semicolon = 'Semicolon',
}

export function translateTypescriptStatements(
  nodes: ArrayData<StatementNode>,
  separator: TypescriptStatementSeparator = TypescriptStatementSeparator.None,
): Text {
  const statements = nodes
    .map((x) => translateTypescriptStatement(x, separator))
    .map((x, i) =>
      i < nodes.count() - 1 && x.hasItem(newCharacter('\n')) ? x.addLastItem(newCharacter('\n')) : x,
    );

  return newText(statements, newText('\n'));
}

export function translateTypescriptStatement(
  node: StatementNode,
  separator: TypescriptStatementSeparator = TypescriptStatementSeparator.None,
): Text {
  const separatorText = getStatementSeparatorText(separator);

  if (is(node, $ExpressionStatementNode())) {
    return translateTypescriptExpressionStatement(node).addLastItems(separatorText);
  }

  if (is(node, $ImportStatementNode())) {
    return translateTypescriptImportStatement(node).addLastItems(separatorText);
  }

  if (is(node, $DeclarationStatementNode())) {
    return translateTypescriptDeclarationStatement(node);
  }

  if (is(node, $ConditionStatementNode())) {
    return translateTypescriptConditionStatement(node);
  }

  if (is(node, $ReturnStatementNode())) {
    return translateTypescriptReturnStatement(node).addLastItems(separatorText);
  }

  return newText(`/* error statement ${node.$}*/`);
}

function getStatementSeparatorText(separator: TypescriptStatementSeparator): Text {
  switch (separator) {
    case TypescriptStatementSeparator.None:
      return newText('');

    case TypescriptStatementSeparator.Comma:
      return newText(',');

    case TypescriptStatementSeparator.Semicolon:
      return newText(';');

    default:
      throw separator satisfies never;
  }
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

//   if (is(node, $DeclarationStatementNode())) {
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
