import {$} from '../../$';
import {String2} from '../../../lib/types';
import {NL} from '../../analyzer/lexical/lexical-analyzer-config';
import {Node} from '../../analyzer/node';
import {TypeDeclarationSemantic} from '../../analyzer/semantic/node/declaration/type/type-declaration-semantic';
import {ValueDeclarationSemantic} from '../../analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {TypeSemantic} from '../../analyzer/semantic/node/type/type-semantic';
import {ValueSemantic} from '../../analyzer/semantic/node/value/value-semantic';
import {SemanticAnalyzer} from '../../analyzer/semantic/semantic-analyzer';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
} from '../../diagnostic/analyzer-diagnostic-manager';
import {Translator} from '../translator';
import {typeDeclarationTypescriptTranslate} from './node/declaration/type/type-declaration-typescript-translate';
import {valueDeclarationTypescriptTranslate} from './node/declaration/value/value-declaration-typescript-translate';
import {statementTypescriptTranslate} from './node/statement/statement-typescript-translate';
import {typeTypescriptTranslate} from './node/type/type-typescript-translate';
import {valueTypescriptTranslate} from './node/value/value-typescript-translate';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
  diagnosticManager: AnalyzerDiagnosticManager;

  type(semantic: TypeSemantic): String2;
  value(semantic: ValueSemantic): String2;
  typeDeclaration(semantic: TypeDeclarationSemantic): String2;
  valueDeclaration(semantic: ValueDeclarationSemantic): String2;
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

    error(node: Node): String2 {
      this.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) => x.cannotTranslate());
      const location = node.reference.resource.location;
      const line = node.reference.range.start.line;
      const column = node.reference.range.start.column;

      return `/* error ${location}:${line}:${column} */`;
    },

    translate(): String2 {
      return (
        semanticAnalyzer.statements
          .map((x) => statementTypescriptTranslate(this, x))
          .filter((x) => x.length > 0)
          .join(NL + NL) + NL
      );
    },
  };
}
