import {$TextFileResource, TextEncodingType, TextFileResource, Uri} from '#common';

export function newTextFileResource(uri: Uri): TextFileResource {
  return {
    $: $TextFileResource(),
    uri,
    encoding: TextEncodingType.UTF8,
  };
}
