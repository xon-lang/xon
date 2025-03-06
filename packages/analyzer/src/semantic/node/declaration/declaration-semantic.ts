import {$AnalyzerType, $Semantic, AttributeList, IdTypeSemantic, Semantic} from '#analyzer';
import {ArrayData, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<IdTypeSemantic>;
    name: Text;
    documentation?: Text | Nothing;
    reference?: TextReference | Nothing;
    attributes?: AttributeList | Nothing;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());
