import {$DeclarationSemantic, corePackageType, DeclarationSemantic} from '#core';
import {Brand} from '#typing';

export type TypeDeclarationSemantic = DeclarationSemantic & Brand<'Core.TypeDeclarationSemantic'>;

export const $TypeDeclarationSemantic = corePackageType<TypeDeclarationSemantic>(
  'TypeDeclarationSemantic',
  $DeclarationSemantic,
);
