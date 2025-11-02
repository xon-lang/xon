import {$CoreType, Boolean2, Model, TextRange, Uri} from '#core';

export type TextReference = Model & {
  uri: Uri;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
};

export const $TextReference = () => $CoreType<TextReference>('TextReference');
