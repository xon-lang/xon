import {$Semantics, Semantics, semanticsPackageType, TypeSemantics} from '#semantics';

export type ValueSemantics = Semantics & {
  type: TypeSemantics;
};

export const $ValueSemantics = semanticsPackageType<ValueSemantics>('ValueSemantics', $Semantics);
