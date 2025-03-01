import {$AnalyzerType, $Semantic, Semantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<TextReference>;
    documentation?: Text | Nothing;
    name: Text;

    equals(other: DeclarationSemantic): Boolean2;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());
