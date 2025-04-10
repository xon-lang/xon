import {$CommonType, Boolean2, TextRange, Uri} from '#common';
import {Model} from '#typing';

export type TextReference = Model & {
  uri: Uri;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
};

export const $TextReference = () => $CommonType<TextReference>('TextReference');
