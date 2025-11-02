import {$CoreType, $Resource, ArrayData, Boolean2, Brand, Model, Text} from '#core';

export type Uri = Model &
  Brand<'Core.Uri'> & {
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

export const $Uri = () => $CoreType<Uri>('Uri', $Resource());
