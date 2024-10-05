import {String2} from '#common';
import {
  AnalyzerDiagnosticManager,
  NL,
  Node,
  SemanticAnalyzer,
  StatementNode,
  Translator,
  TypeDeclarationSemantic,
  TypeSemantic,
  ValueDeclarationSemantic,
  ValueSemantic,
  createDiagnosticManager,
  statementTypescriptTranslate,
  typeDeclarationTypescriptTranslate,
  typeTypescriptTranslate,
  valueDeclarationTypescriptTranslate,
  valueTypescriptTranslate,
} from '#core';
import {$} from '#typing';
import path from 'node:path';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
  diagnosticManager: AnalyzerDiagnosticManager;

  type(semantic: TypeSemantic): String2;
  value(semantic: ValueSemantic): String2;
  typeDeclaration(semantic: TypeDeclarationSemantic): String2;
  valueDeclaration(semantic: ValueDeclarationSemantic): String2;
  statement(node: StatementNode): String2;
  error(node: Node): String2;
};

export function createTypescriptTranslator(semanticAnalyzer: SemanticAnalyzer): TypescriptTranslator {
  return {
    $: $.TypescriptTranslator,
    diagnosticManager: createDiagnosticManager(semanticAnalyzer.resource),

    type(semantic: TypeSemantic): String2 {
      return typeTypescriptTranslate(this, semantic);
    },

    value(semantic: ValueSemantic): String2 {
      return valueTypescriptTranslate(this, semantic);
    },

    typeDeclaration(semantic: TypeDeclarationSemantic): String2 {
      return typeDeclarationTypescriptTranslate(this, semantic);
    },

    valueDeclaration(semantic: ValueDeclarationSemantic): String2 {
      return valueDeclarationTypescriptTranslate(this, semantic);
    },

    statement(statement: StatementNode): String2 {
      return statementTypescriptTranslate(this, statement);
    },

    error(node: Node): String2 {
      this.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotTranslate());
      const location = node.reference.resource.location;
      const basename = path.basename(location ?? '<code>');
      const line = node.reference.range.start.line + 1;
      const column = node.reference.range.start.column + 1;

      return `/* error ${basename}:${line}:${column} */`;
    },

    translate(): String2 {
      return (
        semanticAnalyzer.statements
          .map((node) => this.statement(node))
          .filter((translatedNode) => translatedNode.length > 0)
          .join(NL + NL) + NL
      );
    },
  };
}