import {Nothing, String2} from '#common';
import {$, Node, TypeSemantic, ValueSemantic} from '#core';

export type MemberValueSemantic = ValueSemantic<$.MemberValueSemantic> & {
  instance: ValueSemantic;
  name: String2 | Nothing;
};

export function memberValueSemantic(
  nodeLink: Node,
  instance: ValueSemantic,
  name: String2 | Nothing,
  type: TypeSemantic,
): MemberValueSemantic {
  return {
    $: $.MemberValueSemantic,
    nodeLink,
    instance,
    name,
    type,
  };
}
