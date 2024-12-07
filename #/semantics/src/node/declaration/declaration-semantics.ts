import {Nothing, TextData, TextReference} from '#common';
import {$Semantics, Semantics, semanticsPackageType, TypeSemantics} from '#semantics';

export type DeclarationSemantics = Semantics & {
  documentation?: TextData | Nothing;
  usages: TextReference[];
  modifier?: TextData | Nothing;
  name: TextData;
  type: TypeSemantics;
};

export const $DeclarationSemantics = semanticsPackageType<DeclarationSemantics>(
  'DeclarationSemantics',
  $Semantics,
);
