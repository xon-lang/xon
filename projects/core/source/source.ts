import {existsSync, readFileSync} from 'fs';
import {Boolean2, Nothing, String2, nothing} from '../lib/core';
import '../util/extension';
import {TextResource} from '../util/resource/text/text-resource';
import {SourceRange} from './source-range';

// replace with Resource
export interface Source {
  location: String2 | Nothing;
  text: String2;

  eq(source: Source): Boolean2;
}

export function createSource(location: String2 | Nothing, text: String2): Source {
  return {
    location,
    text,

    eq(source): Boolean2 {
      if (this.location) {
        return this.location === source.location;
      }

      return this.text === source.text;
    },
  };
}

export function sourceFromText(text: String2): Source {
  return createSource(nothing, text);
}

export function sourceFromResource(resource: TextResource): Source {
  return createSource(resource.location, resource.data);
}

export function sourceFromFile(location: String2): Source | Nothing {
  if (!existsSync(location)) {
    return nothing;
  }

  const text = readFileSync(location).toString();

  return createSource(location, text);
}

export function getRangeText(source: Source, range: SourceRange): String2 {
  return source.text.slice(range.start.index, range.stop.index + 1);
}
