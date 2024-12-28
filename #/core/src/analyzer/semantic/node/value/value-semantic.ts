import {$Semantic, corePackageType, Semantic, TypeSemantic} from '#core';

export type ValueSemantic = Semantic & {
  type: TypeSemantic;
};

export const $ValueSemantic = corePackageType<ValueSemantic>('ValueSemantic', $Semantic);
