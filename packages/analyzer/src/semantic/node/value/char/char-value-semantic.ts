import {$ValueSemantic, analyzerPackageType, CharTypeSemantic, Node, ValueSemantic} from '#analyzer';

export type CharValueSemantic = ValueSemantic & {
  type: CharTypeSemantic;
};

export const $CharValueSemantic = analyzerPackageType<CharValueSemantic>('CharValueSemantic', $ValueSemantic);

export function charValueSemantic(nodeLink: Node, type: CharTypeSemantic): CharValueSemantic {
  return {
    $: $CharValueSemantic,
    nodeLink,
    type,
  };
}
