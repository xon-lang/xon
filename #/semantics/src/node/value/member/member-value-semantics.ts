import {Nothing, String2} from '#common';
import {$ValueSemantics, semanticsPackageType, TypeSemantics, ValueSemantics} from '#semantics';

export type MemberValueSemantics = ValueSemantics & {
  instance: ValueSemantics;
  name: String2 | Nothing;
};

export const $MemberValueSemantics = semanticsPackageType<MemberValueSemantics>(
  'MemberValueSemantics',
  $ValueSemantics,
);

export function newMemberValueSemantics(
  instance: ValueSemantics,
  name: String2 | Nothing,
  type: TypeSemantics,
): MemberValueSemantics {
  return {
    $: $MemberValueSemantics,
    instance,
    name,
    type,

    equals(other) {
      return false;
    },
  };
}
