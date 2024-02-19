import { readFileSync } from 'fs';
import { String2 } from '../lib/core';
import { parseSyntax } from '../syntax/syntax';
import { DeclarationSemantic, ValueSemantic } from './semantic';
import { valueSemantic } from './value/value-semantic';

let cachedTypes: Record<String2, DeclarationSemantic> | null = null;

function declarations(): Record<String2, DeclarationSemantic> {
  if (!cachedTypes) {
    cachedTypes = parseSyntax(readFileSync('src/lib/@xon/core/test.xon').toString()).reduce(
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
