import {Boolean2, commonPackageType, Model_V2, TextData, TextRange, TextResource} from '#common';

export type TextReference = Model_V2 & {
  resource: TextResource;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
  text(): TextData;
};

export const $TextReference = commonPackageType<TextReference>('TextReference');
