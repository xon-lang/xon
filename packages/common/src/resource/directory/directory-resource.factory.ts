import {
  $DirectoryResource,
  Boolean2,
  DirectoryResource,
  FileResource,
  newFileResource,
  newText,
  newUri,
  Uri,
} from '#common';
import {existsSync, readdirSync, statSync} from 'node:fs';
import {basename, resolve} from 'node:path';

export function newDirectoryResource(uri: Uri): DirectoryResource {
  const name = newText(basename(uri.value.toNativeString()));

  return {
    $: $DirectoryResource(),
    uri,
    name,

    exists(): Boolean2 {
      return existsSync(this.uri.value.toNativeString());
    },

    *getResources(): Generator<FileResource | DirectoryResource> {
      for (const path of readdirSync(this.uri.value.toNativeString())) {
        const resolvedPath = resolve(this.uri.value.toNativeString(), path);
        const stat = statSync(resolvedPath);

        if (stat.isFile()) {
          yield newFileResource(newUri(newText(resolvedPath)));
        }

        if (stat.isDirectory()) {
          yield newDirectoryResource(newUri(newText(resolvedPath)));
        }
      }
    },
  };
}
