import {$AnalyzerType, $Semantic, Semantic, TypeSemantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<TextReference>;
    name: Text;
    documentation?: Text | Nothing;

    // todo should we use 'getType' or property 'type' ???
    getType(): TypeSemantic;
    equals(other: DeclarationSemantic): Boolean2;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());
