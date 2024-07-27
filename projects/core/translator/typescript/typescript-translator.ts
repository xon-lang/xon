import {$, is} from '../../$';
import {String2} from '../../../lib/types';
import {NL} from '../../analyzer/lexical/lexical-analyzer-config';
import {TypeSemantic} from '../../analyzer/semantic/node/type/type-semantic';
import {SemanticAnalyzer} from '../../analyzer/semantic/semantic-analyzer';
import {StatementNode} from '../../analyzer/syntax/statement/statement-node';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
} from '../../diagnostic/analyzer-diagnostic-manager';
import {TextRange} from '../../util/resource/text/text-range';
import {Translator} from '../translator';
import {toTypeDeclarationTypescriptNode} from './node/declaration/type/type-declaration-typescript-node';
import {typeTypescriptTranslate} from './node/type/type-typescript-node';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
  diagnosticManager: AnalyzerDiagnosticManager;

  type(semantic: TypeSemantic): String2;
  // todo does we really need 'translationName' ???
  error(range: TextRange, translationName: keyof TypescriptTranslator): String2;
  error(): String2;
};

export function createTypescriptTranslator(semanticAnalyzer: SemanticAnalyzer): TypescriptTranslator {
  return {
    $: $.TypescriptTranslator,
    diagnosticManager: createDiagnosticManager(semanticAnalyzer.resource),

    type(semantic: TypeSemantic): String2 {
      return typeTypescriptTranslate(this, semantic);
    },

    error(range?: TextRange, translationName?: keyof TypescriptTranslator): String2 {
      if (range && translationName) {
        const diagnostic = this.diagnosticManager.addPredefinedDiagnostic(range, (x) =>
          x.cannotTranslate(translationName),
        );

        this.diagnosticManager.log(diagnostic);
      }

      return '/* error */';
    },

    translate(): String2 {
      return (
        semanticAnalyzer.statements
          .map(statementTranslate)
          .filter((x) => x.length)
          .join(NL + NL) + NL
      );
    },
  };
}

function statementTranslate(statement: StatementNode): String2 {
  // todo simplify it
  if (is(statement.value, $.DeclarationNode) && is(statement.value.id.semantic, $.TypeDeclarationSemantic)) {
    return toTypeDeclarationTypescriptNode(statement.value.id.semantic).translate();
  }

  return '';
}
