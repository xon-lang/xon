import {$, is} from '../../$';
import {String2} from '../../../lib/types';
import {NL} from '../../analyzer/lexical/lexical-analyzer-config';
import {Node} from '../../analyzer/node';
import {TypeDeclarationSemantic} from '../../analyzer/semantic/node/declaration/type/type-declaration-semantic';
import {TypeSemantic} from '../../analyzer/semantic/node/type/type-semantic';
import {SemanticAnalyzer} from '../../analyzer/semantic/semantic-analyzer';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
} from '../../diagnostic/analyzer-diagnostic-manager';
import {TextRange} from '../../util/resource/text/text-range';
import {Translator} from '../translator';
import {typeDeclarationTypescriptTranslate} from './node/declaration/type/type-declaration-typescript-node';
import {typeTypescriptTranslate} from './node/type/type-typescript-node';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
  diagnosticManager: AnalyzerDiagnosticManager;

  type(semantic: TypeSemantic): String2;
  typeDeclaration(semantic: TypeDeclarationSemantic): String2;
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

    typeDeclaration(semantic: TypeDeclarationSemantic): String2 {
      return typeDeclarationTypescriptTranslate(this, semantic);
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
          .map((x) => statementValueTranslate(this, x.value))
          .filter((x) => x.length)
          .join(NL + NL) + NL
      );
    },
  };
}

function statementValueTranslate(translator: TypescriptTranslator, node: Node): String2 {
  // todo simplify it

  if (is(node, $.DeclarationNode) && is(node.id.semantic, $.TypeDeclarationSemantic)) {
    return translator.typeDeclaration(node.id.semantic);
  }

  return '/* error */';
}
