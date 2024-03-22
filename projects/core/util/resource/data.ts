import {Nothing, Something, String2} from '../../lib/core';

export enum $Resource {
  TEXT = 'TEXT',
}

export interface Resource {
  $: $Resource;
  location: String2;
  data: Something;
}

export function resourceIs<T extends Resource = Resource>(data: {$: $Resource} | Nothing, type: $Resource): data is T {
  return data?.$ === type;
}
