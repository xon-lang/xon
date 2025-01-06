import {$ValueSemantic, corePackageType, Node, TypeSemantic, ValueSemantic} from '#analyzer';
import {Nothing, Resource} from '#common';

export type ImportValueSemantic = ValueSemantic & {
  resource: Resource | Nothing;
};

export const $ImportValueSemantic = corePackageType<ImportValueSemantic>(
  'ImportValueSemantic',
  $ValueSemantic,
);

export function importValueSemantic(
  nodeLink: Node,
  resource: Resource | Nothing,
  type: TypeSemantic,
): ImportValueSemantic {
  return {
    $: $ImportValueSemantic,
    nodeLink,
    type,
    resource,
  };
}
