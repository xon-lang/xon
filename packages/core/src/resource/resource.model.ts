import {$CoreType, Boolean2, Brand, Model, Uri} from '#core';

export type Resource = Model &
  Brand<'Core.Resource'> & {
    uri: Uri;

    exists(): Boolean2;
  };

export const $Resource = () => $CoreType<Resource>('Resource');
