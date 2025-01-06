import {$Semantic, analyzerPackageType, Semantic, TypeSemantic} from '#analyzer';

export type ValueSemantic = Semantic & {
  type: TypeSemantic;
};

export const $ValueSemantic = analyzerPackageType<ValueSemantic>('ValueSemantic', $Semantic);
