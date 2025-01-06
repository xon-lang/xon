import {$ValueSemantic, CharTypeSemantic, corePackageType, Node, ValueSemantic} from '#analyzer';

export type CharValueSemantic = ValueSemantic & {
  type: CharTypeSemantic;
};

export const $CharValueSemantic = corePackageType<CharValueSemantic>('CharValueSemantic', $ValueSemantic);

export function charValueSemantic(nodeLink: Node, type: CharTypeSemantic): CharValueSemantic {
  return {
    $: $CharValueSemantic,
    nodeLink,
    type,
  };
}
