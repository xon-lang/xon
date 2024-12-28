import {$DeclarationSemantic, corePackageType, DeclarationSemantic} from '#core';

export type TypeDeclarationSemantic = DeclarationSemantic & {__branding?: null};

export const $TypeDeclarationSemantic = corePackageType<TypeDeclarationSemantic>(
  'TypeDeclarationSemantic',
  $DeclarationSemantic,
);
