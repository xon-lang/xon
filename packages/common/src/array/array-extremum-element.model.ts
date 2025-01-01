import {commonPackageType, Integer, Number2} from '#common';
import {$Model, $Type, extractType, Model} from '#typing';

export type ExtremumArrayElement<T = unknown, V extends Number2 = Number2> = Model & {
  index: Integer;
  element: T;
  value: V;
};

export const $ExtremumArrayElementModel = <T = unknown, V extends Number2 = Number2>(
  $T: $Type = $Model,
  $V: $Type = $Model,
) => commonPackageType<ExtremumArrayElement<T, V>>('ExtremumArrayElementModel', null, [$T, $V]);

export function newExtremumArrayElement<T = unknown, V extends Number2 = Number2>(
  index: Integer,
  element: T,
  value: V,
): ExtremumArrayElement<T, V> {
  return {
    $: $ExtremumArrayElementModel(extractType(element), extractType(value)),
    index,
    element,
    value,
  };
}
