import {commonPackageType, Integer, Number2} from '#common';
import {$Model, $Type, extractType, Model} from '#typing';

export type ArrayExtremumElement<T = unknown, V extends Number2 = Number2> = Model & {
  index: Integer;
  element: T;
  value: V;
};

export const $ArrayExtremumElement = <T = unknown, V extends Number2 = Number2>(
  $T: $Type = $Model,
  $V: $Type = $Model,
) => commonPackageType<ArrayExtremumElement<T, V>>('ArrayExtremumElement', null, [$T, $V]);

export function newExtremumArrayElement<T = unknown, V extends Number2 = Number2>(
  index: Integer,
  element: T,
  value: V,
): ArrayExtremumElement<T, V> {
  return {
    $: $ArrayExtremumElement(extractType(element), extractType(value)),
    index,
    element,
    value,
  };
}
