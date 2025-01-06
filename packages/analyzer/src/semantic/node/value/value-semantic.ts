import {$Semantic, corePackageType, Semantic, TypeSemantic} from '#analyzer';

export type ValueSemantic = Semantic & {
  type: TypeSemantic;
};

export const $ValueSemantic = corePackageType<ValueSemantic>('ValueSemantic', $Semantic);
