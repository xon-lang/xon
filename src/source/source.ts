import {readFileSync} from 'fs';
import {Nothing, String2, nothing} from '../lib/core';
import '../util/extension';
import {SourceRange} from './source-range';

export interface Source {
  location: String2 | Nothing;
  text: String2;
}

export function createSource(location: String2 | Nothing, text: String2): Source {
  return {
    location,
    text,
  };
}

export function sourceFromText(text: String2): Source {
  return {
    location: nothing,
    text,
  };
}

export function sourceFromFile(location: String2): Source {
  const text = readFileSync(location).toString();

  return {
    location,
    text,
  };
}

export function getRangeText(source: Source, range: SourceRange): String2 {
  return source.text.slice(range.start.index, range.stop.index + 1);
}
