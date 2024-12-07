import {$ValueSemantics, semanticsPackageType, UnknownTypeSemantics, ValueSemantics} from '#semantics';

export type UnknownValueSemantics = ValueSemantics;

export const $UnknownValueSemantics = semanticsPackageType<UnknownValueSemantics>(
  'UnknownValueSemantics',
  $ValueSemantics,
);

export function newUnknownValueSemantics(type: UnknownTypeSemantics): UnknownValueSemantics {
  return {
    $: $UnknownValueSemantics,

    type,

    equals(other) {
      return false;
    },
  };
}
