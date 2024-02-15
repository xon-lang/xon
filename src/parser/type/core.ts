import { readFileSync } from 'fs';
import { Something, String2 } from '../../lib/core';
import { parse } from '../parser';
import { Type } from './type';

let cachedTypes: Record<String2, Type> | null = null;

function types(): Record<String2, Type> {
  if (!cachedTypes) {
    cachedTypes = parse(readFileSync('src/lib/@xon/core/test.xon').toString()).types.reduce(
      // eslint-disable-next-line no-sequences
      (cached, type) => ((cached[type.name] = type), cached),
      {},
    );
  }

  return cachedTypes;
}

export type CoreTypeName = 'Anything' | 'Something' | 'Nothing' | 'Number' | 'Integer' | 'Char' | 'String';

export const coreType = (name: CoreTypeName, value?: Something): Type => types()[name]!;
