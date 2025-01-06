import {$DeclarationSemantic, analyzerPackageType, DeclarationSemantic} from '#analyzer';
import {Brand} from '#typing';

export type ValueDeclarationSemantic = DeclarationSemantic & Brand<'Core.ValueDeclarationSemantic'>;

export const $ValueDeclarationSemantic = analyzerPackageType<ValueDeclarationSemantic>(
  'ValueDeclarationSemantic',
  $DeclarationSemantic,
);
