import {$DeclarationSemantic, corePackageType, DeclarationSemantic} from '#core';

export type ValueDeclarationSemantic = DeclarationSemantic & {__branding?: null};

export const $ValueDeclarationSemantic = corePackageType<ValueDeclarationSemantic>(
  'ValueDeclarationSemantic',
  $DeclarationSemantic,
);
