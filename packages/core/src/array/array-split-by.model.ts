import {$CoreType, ArrayData, Nothing} from '#core';
import {$Model, $Type, extractType, Model} from '#typing';

export type ArraySplitByModel<T> = Model & {splitter: T | Nothing; items: ArrayData<T>};

export const $ArraySplitByModel = <T = unknown>($T: $Type = $Model()) =>
  $CoreType<ArraySplitByModel<T>>('ArraySplitByModel', undefined, [$T]);

export function newArraySplitByModel<T = unknown>(
  splitter: T | Nothing,
  items: ArrayData<T>,
): ArraySplitByModel<T> {
  return {
    $: $ArraySplitByModel(extractType(splitter)),
    splitter,
    items,
  };
}
