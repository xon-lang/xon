import {Boolean2, TextData, TextRange, TextResource, commonPackageType} from '#common';
import {Model} from '#typing';

export type TextReference = Model & {
  resource: TextResource;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
  text(): TextData;
};

export const $TextReference = commonPackageType<TextReference>('TextReference');
