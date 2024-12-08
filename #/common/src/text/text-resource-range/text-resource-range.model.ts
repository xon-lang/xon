import {Boolean2, commonPackageType, Model, TextData, TextRange, TextResource} from '#common';

export type TextReference = Model & {
  resource: TextResource;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
  text(): TextData;
};

export const $TextReference = commonPackageType<TextReference>('TextReference');
