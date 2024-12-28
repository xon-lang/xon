import {Boolean2, Text, TextRange, TextResource, commonPackageType} from '#common';
import {Model} from '#typing';

export type TextReference = Model & {
  resource: TextResource;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
  rangeText(): Text;
};

export const $TextReference = commonPackageType<TextReference>('TextReference');
