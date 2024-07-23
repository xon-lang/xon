import {$, is} from '../../$';
import {String2} from '../../../lib/types';
import {NL} from '../../analyzer/lexical/lexical-analyzer-config';
import {SemanticAnalyzer} from '../../analyzer/semantic/semantic-analyzer';
import {StatementNode} from '../../analyzer/syntax/statement/statement-node';
import {Translator} from '../translator';
import {toTypeDeclarationTypescriptNode} from './node/declaration/type/type-declaration-typescript-node';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
};

export function createTypescriptTranslator(semanticAnalyzer: SemanticAnalyzer): TypescriptTranslator {
  return {
    $: $.TypescriptTranslator,

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
