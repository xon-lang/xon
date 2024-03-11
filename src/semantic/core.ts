import {Nothing, String2, nothing} from '../lib/core';
import {parseSyntax} from '../parser/syntax';
import {sourceFromFile} from '../source/source';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {parseSemantic} from './semantic';

let cachedTypes: Record<String2, DeclarationSemantic[]> | Nothing = nothing;

function declarations(): Record<String2, DeclarationSemantic[]> {
  if (!cachedTypes) {
    const libPath = 'src/lib/@xon/core/test.xon';
    const source = sourceFromFile(libPath);
    const syntax = parseSyntax(source);
    const semantic = parseSemantic(syntax);

    cachedTypes = semantic.declarationManager.declarations;
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
  return declarations()[name][0];
}
