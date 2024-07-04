import {$} from '../../$';
import {String2} from '../../../lib/types';
import {SemanticAnalyzer} from '../../analyzer/semantic/semantic-analyzer';
import {Translator} from '../typescript';

export type TypescriptTranslator = Translator & {
  $: $.TypescriptTranslator;
};

export function createTypescriptTranslator(semanticAnalyzer: SemanticAnalyzer): TypescriptTranslator {
  return {
    $: $.TypescriptTranslator,
    semanticAnalyzer,

    translate(): String2 {
      return '';
    },
  };
}
