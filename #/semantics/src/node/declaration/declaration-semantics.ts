import {Boolean2, Nothing, TextData, TextReference} from '#common';
import {$Semantics, Semantics, semanticsPackageType, TypeSemantics} from '#semantics';

export type DeclarationSemantics = Semantics & {
  documentation?: TextData | Nothing;
  usages: TextReference[];
  modifier?: TextData | Nothing;
  name: TextData;
  type: TypeSemantics;

  eq(other: DeclarationSemantics): Boolean2;
};

export const $DeclarationSemantics = semanticsPackageType<DeclarationSemantics>(
  'DeclarationSemantics',
  $Semantics,
);
