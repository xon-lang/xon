import {$CommonType, $Resource, Text} from '#common';
import {Brand, Model} from '#typing';

export type URI = Model &
  Brand<'Common.URI'> & {
    value: Text;

    // todo use it in future
    // scheme: Text;
    // authority?: Text;
    // path?: Text;
    // query?: Text;
    // fragment?: Text;
  };

export const $URI = () => $CommonType<URI>('URI', $Resource());
