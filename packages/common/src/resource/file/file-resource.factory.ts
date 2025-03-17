import {
  $FileResource,
  Boolean2,
  DirectoryResource,
  FileResource,
  newDirectoryResource,
  newText,
  newURI,
  URI,
} from '#common';
import {existsSync} from 'node:fs';
import {basename, dirname, extname} from 'node:path';

export function newFileResource(uri: URI): FileResource {
  // todo move all calculated values to function and memoize/cache them ???
  const name = newText(basename(uri.value.toNativeString()));
  const extension = newText(extname(uri.value.toNativeString()));

  return {
    $: $FileResource(),
    uri,
    name,
    extension,

    exists(): Boolean2 {
      return existsSync(this.uri.value.toNativeString());
    },

    getDirectory(): DirectoryResource {
      const directoryUri = newURI(newText(dirname(this.uri.value.toNativeString())));

      return newDirectoryResource(directoryUri);
    },

    equals(other: FileResource): Boolean2 {
      return this.uri === other.uri;
    },
  };
}
