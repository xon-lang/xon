import {$CoreType, $Resource, Brand, FileResource, Resource, Text} from '#core';

export type DirectoryResource = Resource &
  Brand<'Core.DirectoryResource'> & {
    name: Text;

    getResources(): Generator<FileResource | DirectoryResource>;
  };

export const $DirectoryResource = () => $CoreType<DirectoryResource>('DirectoryResource', $Resource());
