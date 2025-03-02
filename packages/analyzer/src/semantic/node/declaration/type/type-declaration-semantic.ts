import {
  $AnalyzerType,
  $DeclarationSemantic,
  DeclarationSemantic,
  ParameterTypeDeclarationSemantic,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type TypeDeclarationSemantic = DeclarationSemantic &
  Brand<'Analyzer.TypeDeclarationSemantic'> & {
    readonly parameters?: ArrayData<ParameterTypeDeclarationSemantic> | Nothing;
  };

export const $TypeDeclarationSemantic = () =>
  $AnalyzerType<TypeDeclarationSemantic>('TypeDeclarationSemantic', $DeclarationSemantic());
