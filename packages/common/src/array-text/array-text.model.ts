import {$ArrayData, $Text, ArrayData, commonPackageType, Text} from '#common';

export interface TextArray extends ArrayData<Text> {
  join(splitter: Text): Text;
}

export const $TextArray = commonPackageType<TextArray>('TextArray', $ArrayData($Text));
