import {readFileSync, statSync} from 'fs';
import {resolve} from 'path';
import {Nothing, String2, nothing} from '../../../lib/core';
import {$Resource, Resource} from '../data';

export interface TextResource extends Resource {
  $: $Resource.TEXT;
  data: String2;
}

export function textResourceFromFilePath(filePath: String2): TextResource | Nothing {
  const location = resolve(filePath);

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
