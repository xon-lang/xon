import {$CoreType, $Resource, Boolean2, DirectoryResource, Resource, Text} from '#core';
import {Brand} from '#typing';

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
