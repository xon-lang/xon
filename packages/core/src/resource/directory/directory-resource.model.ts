import {$CoreType, $Resource, FileResource, Resource, Text} from '#core';
import {Brand} from '#typing';

export type DirectoryResource = Resource &
  Brand<'Core.DirectoryResource'> & {
    name: Text;

    getResources(): Generator<FileResource | DirectoryResource>;
  };

export const $DirectoryResource = () => $CoreType<DirectoryResource>('DirectoryResource', $Resource());
