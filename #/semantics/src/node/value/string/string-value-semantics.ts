import {$ValueSemantics, semanticsPackageType, StringTypeSemantics, ValueSemantics} from '#semantics';

export type StringValueSemantics = ValueSemantics & {
  type: StringTypeSemantics;
};

export const $StringValueSemantics = semanticsPackageType<StringValueSemantics>(
  'StringValueSemantics',
  $ValueSemantics,
);

// todo should we use 'value: Integer' or always can get from 'type' ???

export function newStringValueSemantics(type: StringTypeSemantics): StringValueSemantics {
  return {
    $: $StringValueSemantics,
    type,

    equals(other) {
      return false;
    },
  };
}
