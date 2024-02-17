import { readFileSync } from 'fs';
import { String2 } from '../lib/core';
import { parse } from '../syntax/syntax';
import { DeclarationMeta, ValueMeta, valueMeta } from './semantic';

let cachedTypes: Record<String2, DeclarationMeta> | null = null;

function declarations(): Record<String2, DeclarationMeta> {
  if (!cachedTypes) {
    cachedTypes = parse(readFileSync('src/lib/@xon/core/test.xon').toString()).declarations.reduce(
      // eslint-disable-next-line no-sequences
      (cached, type) => ((cached[type.name] = type), cached),
      {},
    );
  }

  return cachedTypes;
}

export type CoreDeclarationName =
  | 'Anything'
  | 'Something'
  | 'Nothing'
  | 'Number'
  | 'Integer'
  | 'Char'
  | 'Array'
  | 'String';

export function coreDeclarationMeta(name: CoreDeclarationName): DeclarationMeta {
  return declarations()[name]!;
}

export const coreValueMeta = (name: CoreDeclarationName, ...args: ValueMeta[]): ValueMeta => {
  const declaration = coreDeclarationMeta(name);
  const meta = valueMeta(declaration, args);

  return meta;
};
