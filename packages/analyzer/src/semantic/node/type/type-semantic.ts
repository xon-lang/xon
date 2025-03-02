import {$AnalyzerType, $Semantic, AttributeList, Semantic} from '#analyzer';
import {Boolean2, Nothing} from '#common';

export type TypeSemantic = Semantic & {
  attributes: AttributeList | Nothing;

  equals(other: TypeSemantic): Boolean2;
  is(other: TypeSemantic): Boolean2;
};

export const $TypeSemantic = () => $AnalyzerType<TypeSemantic>('TypeSemantic', $Semantic());
