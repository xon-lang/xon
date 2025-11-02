import {$ArrayData, $CoreType, $KeyValue, ArrayData} from '#core';
import {$Model, $Type} from '#typing';

export interface UniqueList<T> extends ArrayData<T> {
  _base: ArrayData<T>;
}

export const $UniqueList = <T>($T: $Type = $Model()) =>
  $CoreType<UniqueList<T>>('UniqueList', $ArrayData($KeyValue($T)), [$T]);
