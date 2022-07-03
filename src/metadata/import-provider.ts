import { lstatSync } from 'fs';
import { glob } from 'glob';
import os from 'os';
import path from 'path';
import { String } from '../lib/core';
import { parseSourceFile } from '../util/parse';
import { DeclarationScope } from './declaration/scope/declaration-scope';
import { getSourceMetadata } from './source/source-metadata-helper';

export class ImportProvider {
  constructor(private importPath: string) {}

  scope(): DeclarationScope {
    const fullImportPath = resolvePath(this.importPath);
    const stats = lstatSync(fullImportPath);
    if (!stats.isDirectory()) {
      throw new Error('Should be a directory');
    }

    const globPath = path.resolve(fullImportPath, '*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));
    const scope = new DeclarationScope();

    for (const tree of sources) {
      tree.metadata = getSourceMetadata(tree, scope, true);
    }

    for (const tree of sources) {
      tree.metadata = getSourceMetadata(tree, scope, false);
    }
    return scope;
  }
}

function resolvePath(importPath: String): String {
  if (importPath[0] === '~') {
    return path.join(os.homedir(), importPath.slice(1));
  }
  return importPath;
}
