import {$ArrayData, Anything_V2, ArrayData, commonPackageType} from '#common';
import {$Model, $Type} from '#typing';

export interface UniqueList<T extends Anything_V2 = Anything_V2> extends ArrayData<T> {
  _base: ArrayData<T>;
}

export const $UniqueList = <T extends Anything_V2>($T: $Type = $Model) =>
  commonPackageType<UniqueList<T>>('UniqueList', $ArrayData($T), [$T]);
