import {$CommonType, Boolean2, URI} from '#common';
import {Brand, Model} from '#typing';

export type Resource = Model &
  Brand<'Common.Resource'> & {
    uri: URI;

    exists(): Boolean2;
  };

export const $Resource = () => $CommonType<Resource>('Resource');
