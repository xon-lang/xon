import {join} from 'path';
import {Nothing, String2, nothing} from '../lib/core';
import {parseSyntax} from '../parser/syntax';
import {sourceFromFile} from '../source/source';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {parseSemantic} from './semantic';

export const DEFAULT_CORE_PATH = join(__dirname, '../lib/@xon/core/test-core.xon');

let cachedTypes: Record<String2, DeclarationSemantic[]> | Nothing = nothing;

// const coreDeclarationNames = ['Anything', 'Something', 'Nothing', 'Number', 'Integer', 'Char', 'Array', 'String'];

// todo remove this hack
let initializationStarted = false;

export function initializeCoreDeclarations(corePath: String2): Nothing {
  if (initializationStarted) {
    return;
  }

  initializationStarted = true;
  // todo fix this hack
  const path = corePath.replace('/vscode/dist/vscode/src', '');

  if (!cachedTypes) {
    const source = sourceFromFile(path);

    if (!source) {
      return nothing;
    }

    const syntax = parseSyntax(source);
    const semantic = parseSemantic(syntax);

    cachedTypes = semantic.declarationManager.declarations;
  }
}

export function coreDeclarationSemantic(name: String2, corePath: String2 | Nothing): DeclarationSemantic | Nothing {
  initializeCoreDeclarations(corePath ?? DEFAULT_CORE_PATH);

  if (!cachedTypes) {
    return nothing;
  }

  return cachedTypes[name]?.first() ?? nothing;
}
