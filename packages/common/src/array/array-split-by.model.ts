import {ArrayData, commonPackageType, Nothing} from '#common';
import {$Model, $Type, extractType, Model} from '#typing';

export type ArraySplitByModel<T> = Model & {splitter: T | Nothing; items: ArrayData<T>};

export const $ArraySplitByModel = <T = unknown>($T: $Type = $Model) =>
  commonPackageType<ArraySplitByModel<T>>('ArraySplitByModel', undefined, [$T]);

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
