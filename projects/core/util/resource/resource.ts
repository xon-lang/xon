import {Boolean2, Nothing, Something, String2} from '../../lib/core';

export interface Resource {
  $: $Resource;
  location: String2 | Nothing;
  data: Something;

  eq(other: Resource): Boolean2;
}

export enum $Resource {
  TEXT = 'TEXT',
}

export function resourceIs<T extends Resource = Resource>(data: {$: $Resource} | Nothing, type: $Resource): data is T {
  return data?.$ === type;
}
