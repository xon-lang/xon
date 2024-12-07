import {$DeclarationSemantics, DeclarationSemantics, semanticsPackageType} from '#semantics';

export type ValueDeclarationSemantics = DeclarationSemantics;

export const $ValueDeclarationSemantics = semanticsPackageType<ValueDeclarationSemantics>(
  'ValueDeclarationSemantics',
  $DeclarationSemantics,
);
