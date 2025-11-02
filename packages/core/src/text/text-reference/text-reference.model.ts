import {$CoreType, Boolean2, TextRange, Uri} from '#core';
import {Model} from '#typing';

export type TextReference = Model & {
  uri: Uri;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
};

export const $TextReference = () => $CoreType<TextReference>('TextReference');
