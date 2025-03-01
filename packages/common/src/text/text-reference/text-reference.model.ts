import {$CommonType, Boolean2, Text, TextRange} from '#common';
import {Model} from '#typing';

export type TextReference = Model & {
  location: Text;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
};

export const $TextReference = () => $CommonType<TextReference>('TextReference');
