import {$DeclarationSemantic, analyzerPackageType, DeclarationSemantic} from '#analyzer';
import {Brand} from '#typing';

export type TypeDeclarationSemantic = DeclarationSemantic & Brand<'Analyzer.TypeDeclarationSemantic'>;

export const $TypeDeclarationSemantic = analyzerPackageType<TypeDeclarationSemantic>(
  'TypeDeclarationSemantic',
  $DeclarationSemantic,
);
