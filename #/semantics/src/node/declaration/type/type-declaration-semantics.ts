import {$DeclarationSemantics, DeclarationSemantics, semanticsPackageType} from '#semantics';

export type TypeDeclarationSemantics = DeclarationSemantics;

export const $TypeDeclarationSemantics = semanticsPackageType<TypeDeclarationSemantics>(
  'TypeDeclarationSemantics',
  $DeclarationSemantics,
);
