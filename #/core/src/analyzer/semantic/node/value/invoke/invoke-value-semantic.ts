import {$ValueSemantic, corePackageType, Node, TypeSemantic, ValueSemantic} from '#core';

export type InvokeValueSemantic = ValueSemantic & {__branding?: null};

export const $InvokeValueSemantic = corePackageType<InvokeValueSemantic>(
  'InvokeValueSemantic',
  $ValueSemantic,
);

export function invokeValueSemantic(nodeLink: Node, type: TypeSemantic): InvokeValueSemantic {
  return {
    $: $InvokeValueSemantic,
    nodeLink,
    type,
  };
}
