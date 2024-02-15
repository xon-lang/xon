import { readFileSync } from 'fs';
import { Char, Integer, String2 } from '../../lib/core';
import { parse } from '../parser';
import { Type } from './type';

let cachedTypes: Type[] | null = null;

function types(): Type[] {
  if (!cachedTypes) {
    cachedTypes = parse(readFileSync('src/lib/@xon/core/test.xon').toString()).types;
  }

  return cachedTypes;
}

export const anythingType = (): Type => types().find((x) => x.name === 'Anything')!;

export const somethingType = (): Type => types().find((x) => x.name === 'Something')!;

export const nothingType = (): Type => types().find((x) => x.name === 'Nothing')!;

export const numberType = (): Type => types().find((x) => x.name === 'Number')!;

export const integerType = (value?: Integer): Type => types().find((x) => x.name === 'Integer')!;

export const charType = (value?: Char): Type => types().find((x) => x.name === 'Char')!;

export const stringType = (value?: String2): Type => types().find((x) => x.name === 'String')!;
