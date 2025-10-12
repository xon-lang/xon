import {$AnalyzerType, $Semantic, Semantic, SemanticScope} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ObjectSemantic = Semantic & Brand<'Analyzer.ObjectSemantic'>;

export const $ObjectSemantic = () => $AnalyzerType<ObjectSemantic>('ObjectSemantic', $Semantic());

export function newObjectSemantic(scope?: SemanticScope | Nothing): ObjectSemantic {
  return {
    $: $ObjectSemantic(),
    scope,
  };
}
