import { readFileSync } from 'fs';
import { Nothing, String2, nothing } from '../lib/core';
import { parseSyntax } from '../syntax/syntax';
import { ModelSemantic } from './model/model-semantic';
import { DeclarationSemantic, parseSemantic } from './semantic';

let cachedTypes: Record<String2, DeclarationSemantic[]> | Nothing = nothing;

function declarations(): Record<String2, DeclarationSemantic[]> {
  if (!cachedTypes) {
    const libPath = 'src/lib/@xon/core/test.xon';
    const libContent = readFileSync(libPath).toString();
    const syntax = parseSyntax(libContent);
    const semantic = parseSemantic(syntax);

    cachedTypes = semantic.declarations;
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

export function coreDeclarationSemantic(name: CoreDeclarationName): ModelSemantic {
  return declarations()[name][0] as ModelSemantic;
}