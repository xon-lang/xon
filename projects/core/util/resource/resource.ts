import {Boolean2, Nothing, Something, String2} from '../../lib/core';
import {SourceRange} from '../../source/source-range';

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

export function getRangeText(text: String2, range: SourceRange): String2 {
  return text.slice(range.start.index, range.stop.index);
}
