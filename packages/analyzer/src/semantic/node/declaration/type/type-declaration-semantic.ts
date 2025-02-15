import {$AnalyzerType, $DeclarationSemantic, DeclarationSemantic} from '#analyzer';
import {Brand} from '#typing';

export type TypeDeclarationSemantic = DeclarationSemantic & Brand<'Analyzer.TypeDeclarationSemantic'>;

export const $TypeDeclarationSemantic = () =>
  $AnalyzerType<TypeDeclarationSemantic>('TypeDeclarationSemantic', $DeclarationSemantic());
