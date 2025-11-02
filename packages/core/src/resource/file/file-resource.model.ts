import {$CoreType, $Resource, Boolean2, Brand, DirectoryResource, Resource, Text} from '#core';

export type FileResource = Resource &
  Brand<'Core.FileResource'> & {
    // todo move to 'FileURI' ???
    basename: Text;
    name: Text;
    // todo move to 'FileURI' ???
    extension: Text;

    read(): Buffer;
    directory(): DirectoryResource;
    equals(other: FileResource): Boolean2;
  };

export const $FileResource = () => $CoreType<FileResource>('FileResource', $Resource());
