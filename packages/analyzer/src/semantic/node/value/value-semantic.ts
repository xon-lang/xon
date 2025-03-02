import {$AnalyzerType, $Semantic, Semantic, TypeSemantic} from '#analyzer';
import {Nothing} from '#common';

export type ValueSemantic = Semantic & {
  type?: TypeSemantic | Nothing;
};

export const $ValueSemantic = () => $AnalyzerType<ValueSemantic>('ValueSemantic', $Semantic());
