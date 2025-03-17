import {$TextFileResource, TextEncodingType, TextFileResource, URI} from '#common';

export function newTextFileResource(uri: URI): TextFileResource {
  return {
    $: $TextFileResource(),
    uri,
    encoding: TextEncodingType.UTF8,
  };
}
