import {$URI, Text, URI} from '#common';

export function newURI(value: Text): URI {
  return {
    $: $URI(),
    value,
  };
}
