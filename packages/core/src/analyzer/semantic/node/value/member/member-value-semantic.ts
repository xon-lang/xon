import {Nothing, Text} from '#common';
import {$ValueSemantic, corePackageType, Node, TypeSemantic, ValueSemantic} from '#core';

export type MemberValueSemantic = ValueSemantic & {
  instance: ValueSemantic;
  name: Text | Nothing;
};

export const $MemberValueSemantic = corePackageType<MemberValueSemantic>(
  'MemberValueSemantic',
  $ValueSemantic,
);

export function memberValueSemantic(
  nodeLink: Node,
  instance: ValueSemantic,
  name: Text | Nothing,
  type: TypeSemantic,
): MemberValueSemantic {
  return {
    $: $MemberValueSemantic,
    nodeLink,
    instance,
    name,
    type,
  };
}
