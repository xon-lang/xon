import {$ValueSemantics, CharTypeSemantics, semanticsPackageType, ValueSemantics} from '#semantics';

export type CharValueSemantics = ValueSemantics & {
  type: CharTypeSemantics;
};

export const $CharValueSemantics = semanticsPackageType<CharValueSemantics>(
  'CharValueSemantics',
  $ValueSemantics,
);

export function newCharValueSemantics(type: CharTypeSemantics): CharValueSemantics {
  return {
    $: $CharValueSemantics,
    type,

    equals(other) {
      return false;
    },
  };
}
