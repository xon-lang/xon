import {$CommonType, $Resource, ArrayData, Boolean2, Text} from '#common';
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
    equals(other: Uri): Boolean2;
  };

export const $Uri = () => $CommonType<Uri>('Uri', $Resource());
