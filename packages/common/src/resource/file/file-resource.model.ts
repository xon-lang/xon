import {$CommonType, $Resource, Boolean2, DirectoryResource, Resource, Text} from '#common';
import {Brand} from '#typing';

export type FileResource = Resource &
  Brand<'Common.FileResource'> & {
    // todo move to 'FileURI' ???
    name: Text;
    // todo move to 'FileURI' ???
    extension: Text;

    getDirectory(): DirectoryResource;
    equals(other: FileResource): Boolean2;
  };

export const $FileResource = () => $CommonType<FileResource>('FileResource', $Resource());
