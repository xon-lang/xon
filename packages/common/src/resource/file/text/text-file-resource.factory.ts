import {$TextFileResource, newFileResource, TextEncodingType, TextFileResource, Uri} from '#common';

export function newTextFileResource(uri: Uri): TextFileResource {
  const file = newFileResource(uri);

  return {
    ...file,

    $: $TextFileResource(),
    uri,
    encoding: TextEncodingType.UTF8,
  };
}
