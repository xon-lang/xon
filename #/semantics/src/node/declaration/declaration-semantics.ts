import {TextData, TextReference} from '#common';
import {$Semantics, Semantics, semanticsPackageType, TypeSemantics} from '#semantics';
import {Nothing} from '#typing';

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
