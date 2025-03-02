import {
  $AnalyzerType,
  $Semantic,
  Semantic,
  TypeSemantic,
  UsageTypeSemantic,
  UsageValueSemantic,
} from '#analyzer';
import {ArrayData, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<UsageTypeSemantic | UsageValueSemantic>;
    name: Text;
    documentation?: Text | Nothing;
    reference?: TextReference | Nothing;

    getType(): TypeSemantic | Nothing;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());
