import {$ValueSemantics, IntegerTypeSemantics, semanticsPackageType, ValueSemantics} from '#semantics';

export type IntegerValueSemantics = ValueSemantics & {
  type: IntegerTypeSemantics;
};

export const $IntegerValueSemantics = semanticsPackageType<IntegerValueSemantics>(
  'IntegerValueSemantics',
  $ValueSemantics,
);

export function newIntegerValueSemantics(type: IntegerTypeSemantics): IntegerValueSemantics {
  return {
    $: $IntegerValueSemantics,
    type,

    equals(other) {
      return false;
    },
  };
}
