import { Integer, String2 } from '../lib/core';
import { Node } from '../parser/node/node';
import { ParserContext } from '../parser/parser-context';

import '../util/extensions';

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

export function getNodeText({ source }: ParserContext, { range }: Node): String2 {
  return source.text.slice(range.start.index, range.stop.index + 1);
}
