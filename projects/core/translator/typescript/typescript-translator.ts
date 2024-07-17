import {$, is} from '../../$';
import {String2} from '../../../lib/types';
import {NL} from '../../analyzer/lexical/lexical-analyzer-config';
import {SemanticAnalyzer} from '../../analyzer/semantic/semantic-analyzer';
import {StatementNode} from '../../analyzer/syntax/statement/statement-node';
import {Translator} from '../translator';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
};

export function createTypescriptTranslator(semanticAnalyzer: SemanticAnalyzer): TypescriptTranslator {
  return {
    $: $.TypescriptTranslator,

    translate(): String2 {
      return semanticAnalyzer.statements.map(statementTranslate).join(NL + NL);
    },
  };
}

function statementTranslate(statement: StatementNode): String2 {
  if (is(statement.value, $.DeclarationNode)) {
    return declarationTypescriptTransform(statement.value).translate();
  }

  return '';
}
