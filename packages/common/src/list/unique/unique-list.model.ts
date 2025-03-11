import {$ArrayData, $CommonType, $KeyValue, ArrayData} from '#common';
import {$Model, $Type} from '#typing';

export interface UniqueList<T> extends ArrayData<T> {
  _base: ArrayData<T>;
}

export const $UniqueList = <T>($T: $Type = $Model()) =>
  $CommonType<UniqueList<T>>('UniqueList', $ArrayData($KeyValue($T)), [$T]);
