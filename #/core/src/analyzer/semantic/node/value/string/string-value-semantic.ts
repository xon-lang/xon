import {$ValueSemantic, corePackageType, Node, StringTypeSemantic, ValueSemantic} from '#core';

export type StringValueSemantic = ValueSemantic & {
  type: StringTypeSemantic;
};

export const $StringValueSemantic = corePackageType<StringValueSemantic>(
  'StringValueSemantic',
  $ValueSemantic,
);

// todo should we use 'value: Integer' or always can get from 'type' ???

export function stringValueSemantic(nodeLink: Node, type: StringTypeSemantic): StringValueSemantic {
  return {
    $: $StringValueSemantic,
    nodeLink,
    type,
  };
}
