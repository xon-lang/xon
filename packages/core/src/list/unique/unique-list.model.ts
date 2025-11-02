import {$ArrayData, $CoreType, $KeyValue, $Model, $Type, ArrayData} from '#core';

export interface UniqueList<T> extends ArrayData<T> {
  _base: ArrayData<T>;
}

export const $UniqueList = <T>($T: $Type = $Model()) =>
  $CoreType<UniqueList<T>>('UniqueList', $ArrayData($KeyValue($T)), [$T]);
