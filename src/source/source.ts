import { String2 } from '~/lib/core';

export interface Source {
  path: String2;
  text: String2;
}

export function createSource(path: String2, text: String2): Source {
  return {
    path,
    text,
  };
}
