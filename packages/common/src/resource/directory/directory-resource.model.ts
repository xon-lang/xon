import {$CommonType, $Resource, FileResource, Resource, Text} from '#common';
import {Brand} from '#typing';

export type DirectoryResource = Resource &
  Brand<'Common.DirectoryResource'> & {
    name: Text;

    getResources(): Generator<FileResource | DirectoryResource>;
  };

export const $DirectoryResource = () => $CommonType<DirectoryResource>('DirectoryResource', $Resource());
