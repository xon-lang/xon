import {Integer, String2} from '../lib/core';

import '../util/extension';
import {SourceRange} from './source-range';

export interface Source {
  location: String2 | null;
  text: String2;
  length: Integer;
}

export function createSource(path: String2 | null, text: String2): Source {
  return {
    location: path,
    text,
    length: text.length,
  };
}

export function getRangeText(source: Source, range: SourceRange): String2 {
  return source.text.slice(range.start.index, range.stop.index + 1);
}
