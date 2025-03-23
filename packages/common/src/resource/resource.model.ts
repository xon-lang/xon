import {$CommonType, Boolean2, Uri} from '#common';
import {Brand, Model} from '#typing';

export type Resource = Model &
  Brand<'Common.Resource'> & {
    uri: Uri;

    exists(): Boolean2;
  };

export const $Resource = () => $CommonType<Resource>('Resource');
