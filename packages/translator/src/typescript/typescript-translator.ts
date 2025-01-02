import {newText, Text} from '#common';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
  NL,
  Node,
  SemanticAnalyzer,
  StatementNode,
  TypeDeclarationSemantic,
  TypeSemantic,
  ValueDeclarationSemantic,
  ValueSemantic,
} from '#core';
import {
  $Translator,
  statementTypescriptTranslate,
  Translator,
  translatorPackageType,
  typeDeclarationTypescriptTranslate,
  typeTypescriptTranslate,
  valueDeclarationTypescriptTranslate,
  valueTypescriptTranslate,
} from '#translator';
import path from 'node:path';

export type TypescriptTranslator = Translator & {
  diagnosticManager: AnalyzerDiagnosticManager;

  type(semantic: TypeSemantic): Text;
  value(semantic: ValueSemantic): Text;
  typeDeclaration(semantic: TypeDeclarationSemantic): Text;
  valueDeclaration(semantic: ValueDeclarationSemantic): Text;
  statement(node: StatementNode): Text;
  error(node: Node): Text;
};

export const $TypescriptTranslator = translatorPackageType('TypescriptTranslator', $Translator);

export function newTypescriptTranslator(semanticAnalyzer: SemanticAnalyzer): TypescriptTranslator {
  return {
    $: $TypescriptTranslator,
    diagnosticManager: createDiagnosticManager(semanticAnalyzer.resource),

    type(semantic: TypeSemantic): Text {
      return typeTypescriptTranslate(this, semantic);
    },

    value(semantic: ValueSemantic): Text {
      return valueTypescriptTranslate(this, semantic);
    },

    typeDeclaration(semantic: TypeDeclarationSemantic): Text {
      return typeDeclarationTypescriptTranslate(this, semantic);
    },

    valueDeclaration(semantic: ValueDeclarationSemantic): Text {
      return valueDeclarationTypescriptTranslate(this, semantic);
    },

    statement(statement: StatementNode): Text {
      return statementTypescriptTranslate(this, statement);
    },

    error(node: Node): Text {
      this.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotTranslate());
      const location = node.reference.resource.location;
      const basename = path.basename(location?.toNativeString() ?? '<code>');
      const line = node.reference.range.start.line + 1;
      const column = node.reference.range.start.column + 1;

      return newText(`/* error ${basename}:${line}:${column} */`);
    },

    translate(): Text {
      const translatedStatements = semanticAnalyzer.statements
        .map((node) => this.statement(node))
        .filter((translatedNode) => translatedNode.length() > 0);

      return newText(translatedStatements, NL.addLastItems(NL)).addLastItems(NL);
    },
  };
}
