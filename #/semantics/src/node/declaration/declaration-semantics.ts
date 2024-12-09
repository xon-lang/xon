import {Text, TextReference} from '#common';
import {$Semantics, Semantics, semanticsPackageType, TypeSemantics} from '#semantics';
import {Nothing} from '#typing';

export type DeclarationSemantics = Semantics & {
  documentation?: Text | Nothing;
  usages: TextReference[];
  modifier?: Text | Nothing;
  name: Text;
  type: TypeSemantics;
};

export const $DeclarationSemantics = semanticsPackageType<DeclarationSemantics>(
  'DeclarationSemantics',
  $Semantics,
);
