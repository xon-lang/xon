import {commonPackageType, Integer, Number2} from '#common';
import {$Model, $Type, is, Model} from '#typing';

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
    $: $ExtremumArrayElementModel(extractTypeOrModel(element), extractTypeOrModel(value)),
    index,
    element,
    value,
  };
}

function extractTypeOrModel(value: unknown): $Type {
  if (is(value, $Model)) {
    return value.$;
  }

  return $Model;
}
