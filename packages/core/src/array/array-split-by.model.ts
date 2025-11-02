import {$CoreType, $Model, $Type, ArrayData, extractType, Model, Nothing} from '#core';

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
