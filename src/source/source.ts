import { Integer, String2 } from '../lib/core';

export interface Source {
  path: String2;
  text: String2;
  characters: Uint8Array;
  length: Integer;
}

export function createSource(path: String2, text: String2): Source {
  const characters = text.toCharCodes();

  return {
    path,
    text,
    characters,
    length: text.length,
  };
}
