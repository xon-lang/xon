import {join} from 'path';
import {Nothing, String2, nothing} from '../lib/core';
import {parseSyntax} from '../parser/syntax';
import {sourceFromFile} from '../source/source';
import {DeclarationManager} from './declaration-manager';
import {parseSemantic} from './semantic';

export const DEFAULT_CORE_PATH = join(__dirname, '../lib/@xon/core/test-core.xon');

let declarationManager: DeclarationManager | Nothing = nothing;
// todo remove this hack
let initializationStarted = false;

export function initializeCoreDeclarations(corePath: String2): Nothing {
  if (initializationStarted) {
    return;
  }

  initializationStarted = true;
  // todo fix this hack
  const path = corePath.replace('/vscode/dist/vscode/src', '');

  if (!declarationManager) {
    const source = sourceFromFile(path);

    if (!source) {
      return nothing;
    }

    const syntax = parseSyntax(source);
    const semantic = parseSemantic(syntax);

    declarationManager = semantic.declarationManager;
  }
}

export function coreDeclarationManager(corePath: String2 | Nothing): DeclarationManager | Nothing {
  initializeCoreDeclarations(corePath ?? DEFAULT_CORE_PATH);

  if (!declarationManager) {
    return nothing;
  }

  return declarationManager;
}
