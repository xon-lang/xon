import {$CoreType, Boolean2, Uri} from '#core';
import {Brand, Model} from '#typing';

export type Resource = Model &
  Brand<'Core.Resource'> & {
    uri: Uri;

    exists(): Boolean2;
  };

export const $Resource = () => $CoreType<Resource>('Resource');
