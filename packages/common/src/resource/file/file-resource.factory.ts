import {
  $FileResource,
  Boolean2,
  DirectoryResource,
  FileResource,
  newDirectoryResource,
  newText,
  newUri,
  Uri,
} from '#common';
import {existsSync} from 'node:fs';
import {basename as base, dirname, extname} from 'node:path';

export function newFileResource(uri: Uri): FileResource {
  // todo move all calculated values to function and memoize/cache them ???
  const basename = newText(base(uri.value.toNativeString()));
  const name = newText(
    basename
      .toNativeString()
      .match(/^(.+?)(\.[^.]+)?$/)
      ?.at(1) ?? '',
  );
  const extension = newText(extname(uri.value.toNativeString()));

  return {
    $: $FileResource(),
    uri,
    basename,
    name,
    extension,

    exists(): Boolean2 {
      return existsSync(this.uri.value.toNativeString());
    },

    getDirectory(): DirectoryResource {
      const directoryUri = newUri(newText(dirname(this.uri.value.toNativeString())));

      return newDirectoryResource(directoryUri);
    },

    equals(other: FileResource): Boolean2 {
      return this.uri === other.uri;
    },
  };
}
