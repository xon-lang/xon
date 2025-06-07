import {$AnalyzerType, $Semantic, Semantic, SemanticScope} from '#analyzer';
import {Boolean2, Nothing} from '#common';
import {Brand} from '#typing';

export type TypeSemantic = Semantic &
  Brand<'Analyzer.TypeSemantic'> & {
    scope?: SemanticScope | Nothing;

    equals(other: TypeSemantic): Boolean2;
    is(other: TypeSemantic): Boolean2;
  };

export const $TypeSemantic = () => $AnalyzerType<TypeSemantic>('TypeSemantic', $Semantic());
