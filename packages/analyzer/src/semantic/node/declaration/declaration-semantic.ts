import {$AnalyzerType, $Semantic, Semantic, UsageSemantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<UsageSemantic>;
    name: Text;
    documentation?: Text | Nothing;
    reference?: TextReference | Nothing;

    equals(other: DeclarationSemantic): Boolean2;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());
