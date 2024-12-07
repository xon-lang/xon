import {$ValueSemantics, semanticsPackageType, TypeSemantics, ValueSemantics} from '#semantics';

export type InvokeValueSemantics = ValueSemantics;

export const $InvokeValueSemantics = semanticsPackageType<InvokeValueSemantics>(
  'InvokeValueSemantics',
  $ValueSemantics,
);

export function newInvokeValueSemantics(type: TypeSemantics): InvokeValueSemantics {
  return {
    $: $InvokeValueSemantics,
    type,

    equals(other) {
      return false;
    },
  };
}
