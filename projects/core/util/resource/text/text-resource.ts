import {readFileSync, statSync} from 'fs';
import {Nothing, String2, nothing} from '../../../lib/core';
import {$Resource, Resource} from '../data';

export interface TextResource extends Resource {
  $: $Resource.TEXT;
  data: String2;
}

export function textResourceFromFilePath(location: String2): TextResource | Nothing {
  if (!statSync(location).isFile()) {
    return nothing;
  }

  const data = readFileSync(location).toString();

  return {
    $: $Resource.TEXT,
    location,
    data,
  };
}
