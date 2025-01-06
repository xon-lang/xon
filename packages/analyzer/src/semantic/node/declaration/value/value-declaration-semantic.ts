import {$DeclarationSemantic, corePackageType, DeclarationSemantic} from '#analyzer';
import {Brand} from '#typing';

export type ValueDeclarationSemantic = DeclarationSemantic & Brand<'Core.ValueDeclarationSemantic'>;

export const $ValueDeclarationSemantic = corePackageType<ValueDeclarationSemantic>(
  'ValueDeclarationSemantic',
  $DeclarationSemantic,
);
