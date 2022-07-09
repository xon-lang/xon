import { lstatSync } from 'fs';
import { glob } from 'glob';
import os from 'os';
import path from 'path';
import { String } from '../lib/core';
import { parseSourceFile } from '../util/parse';
import { DeclarationScope } from './declaration/scope/declaration-scope';
import { getSourceMetadata } from './source/source-metadata-helper';

export class ImportProvider {
  fullPath: String;

  cache: Map<String, DeclarationScope> = new Map();

  constructor(private importPath: string) {
    this.fullPath = resolvePath(this.importPath);
  }

  isValid() {
    try {
      const stats = lstatSync(this.fullPath);
      return stats.isDirectory();
    } catch (error) {
      return false;
    }
  }

  scope(): DeclarationScope {
    if (!this.isValid()) {
      throw new Error('Should be a directory');
    }

    if (this.cache.has(this.fullPath)) {
      return this.cache.get(this.fullPath);
    }

    const globPath = path.resolve(this.fullPath, '*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));
    const scope = new DeclarationScope();

    for (const tree of sources) {
      tree.metadata = getSourceMetadata(tree, scope, true);
    }
    this.cache.set(this.fullPath, scope);

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
