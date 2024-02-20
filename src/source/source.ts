import { Integer, String2 } from '../lib/core';

import '../util/extension';
import { SourceRange } from './source-range';

export interface Source {
  location: String2 | null;
  // todo remove it and use characters
  text: String2;
  characters: Uint8Array;
  length: Integer;
}

export function createSource(path: String2 | null, text: String2): Source {
  const characters = text.toCharCodes();

  return {
    location: path,
    text,
    characters,
    length: text.length,
  };
}

export function getRangeText(source: Source, range: SourceRange): String2 {
  return source.text.slice(range.start.index, range.stop.index + 1);
}
