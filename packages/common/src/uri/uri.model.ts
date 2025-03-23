import {$CommonType, $Resource, ArrayData, Text} from '#common';
import {Brand, Model} from '#typing';

export type Uri = Model &
  Brand<'Common.Uri'> & {
    value: Text;

    // todo use it in future

    // scheme
    // host
    // hostname
    // port
    // username
    // password
    // pathname
    // search
    // protocol
    // authority
    // query
    // hash
    // ...

    resolve(relativePaths: ArrayData<Text>): Uri;
  };

export const $Uri = () => $CommonType<Uri>('Uri', $Resource());
