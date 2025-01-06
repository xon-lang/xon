import {$ValueSemantic, analyzerPackageType, Node, StringTypeSemantic, ValueSemantic} from '#analyzer';

export type StringValueSemantic = ValueSemantic & {
  type: StringTypeSemantic;
};

export const $StringValueSemantic = analyzerPackageType<StringValueSemantic>(
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
