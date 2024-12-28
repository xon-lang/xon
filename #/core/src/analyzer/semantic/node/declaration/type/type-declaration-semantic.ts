import {$DeclarationSemantic, corePackageType, DeclarationSemantic} from '#core';
import {Brand} from '#typing';

export type TypeDeclarationSemantic = DeclarationSemantic & Brand<'TypeDeclarationSemantic'>;

export const $TypeDeclarationSemantic = corePackageType<TypeDeclarationSemantic>(
  'TypeDeclarationSemantic',
  $DeclarationSemantic,
);
