import {$AnalyzerType, $DeclarationSemantic, DeclarationSemantic, TypeSemantic} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type ValueDeclarationSemantic = DeclarationSemantic &
  Brand<'Analyzer.ValueDeclarationSemantic'> & {
    type?: TypeSemantic | Nothing;
  };

export const $ValueDeclarationSemantic = () =>
  $AnalyzerType<ValueDeclarationSemantic>('ValueDeclarationSemantic', $DeclarationSemantic());
