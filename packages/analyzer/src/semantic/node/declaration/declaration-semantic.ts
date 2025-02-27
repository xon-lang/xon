import {$AnalyzerType, $Semantic, Semantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    name: Text;
    documentation?: Text | Nothing;
    usages: ArrayData<TextReference>;

    equals(other: DeclarationSemantic): Boolean2;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());
