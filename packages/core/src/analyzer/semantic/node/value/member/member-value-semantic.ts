import {Nothing, String2} from '#common';
import {$ValueSemantic, corePackageType, Node, TypeSemantic, ValueSemantic} from '#core';

export type MemberValueSemantic = ValueSemantic & {
  instance: ValueSemantic;
  name: String2 | Nothing;
};

export const $MemberValueSemantic = corePackageType<MemberValueSemantic>(
  'MemberValueSemantic',
  $ValueSemantic,
);

export function memberValueSemantic(
  nodeLink: Node,
  instance: ValueSemantic,
  name: String2 | Nothing,
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
