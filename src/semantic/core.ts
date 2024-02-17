import { readFileSync } from 'fs';
import { String2 } from '../lib/core';
import { parse } from '../syntax/syntax';
import { DeclarationSemantic } from './model/model-semantic';
import { ValueSemantic, valueSemantic } from './value/value-semantic';

let cachedTypes: Record<String2, DeclarationSemantic> | null = null;

function declarations(): Record<String2, DeclarationSemantic> {
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

export function coreDeclarationSemantic(name: CoreDeclarationName): DeclarationSemantic {
  return declarations()[name]!;
}

export const coreValueSemantic = (name: CoreDeclarationName, ...args: ValueSemantic[]): ValueSemantic => {
  const declaration = coreDeclarationSemantic(name);

  return valueSemantic(declaration, args);
};
