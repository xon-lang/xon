import {$ValueSemantic, corePackageType, Node, TypeSemantic, ValueSemantic} from '#core';
import {Brand} from '#typing';

export type InvokeValueSemantic = ValueSemantic & Brand<'Core.InvokeValueSemantic'>;

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
