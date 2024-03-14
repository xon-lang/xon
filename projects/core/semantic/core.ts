import {join} from 'path';
import {Nothing, String2, nothing} from '../lib/core';
import {parseSyntax} from '../parser/syntax';
import {sourceFromFile} from '../source/source';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {parseSemantic} from './semantic';

const DEFAULT_CORE_PATH = join(__dirname, '../lib/@xon/core/test.xon');

let cachedTypes: Record<String2, DeclarationSemantic[]> | Nothing = nothing;

function declarations(corePath: String2): Record<String2, DeclarationSemantic[]> {
  if (!cachedTypes) {
    const source = sourceFromFile(corePath);
    const syntax = parseSyntax(source);
    const semantic = parseSemantic(syntax);

    cachedTypes = semantic.declarationManager.declarations;
  }

  return cachedTypes;
}

const coreDeclarationName = ['Anything', 'Something', 'Nothing', 'Number', 'Integer', 'Char', 'Array', 'String'];

export function coreDeclarationSemantic(name: String2, corePath: String2 = DEFAULT_CORE_PATH): DeclarationSemantic {
  if (coreDeclarationName.includes(name)) {
    throw new Error('Not implemented');
  }

  return declarations(corePath)[name][0];
}
