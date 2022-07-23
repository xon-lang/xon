import { lstatSync } from 'fs';
import { glob } from 'glob';
import os from 'os';
import path from 'path';
import { String } from '../lib/core';
import { parseSourceFile } from '../util/parse';
import { fillShadowSourceMetadata } from './declaration/declaration-metadata-helper';
import { DeclarationScope } from './declaration/scope/declaration-scope';
import { getSourceMetadata } from './source/source-metadata-helper';

export class ImportProvider {
  fullPath: String;

  static cache: Map<String, DeclarationScope> = new Map();

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

    if (ImportProvider.cache.has(this.fullPath)) {
      return ImportProvider.cache.get(this.fullPath);
    }

    const globPath = path.join(this.fullPath, '*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));
    const scope = new DeclarationScope();
    ImportProvider.cache.set(this.fullPath, scope);

    for (const tree of sources) {
      scope.declarations.push(...fillShadowSourceMetadata(tree));
    }

    for (const tree of sources) {
      tree.scope.parent = scope;
      tree.metadata = getSourceMetadata(tree);
    }

    return scope;
  }
}

function resolvePath(importPath: String): String {
  if (importPath[0] === '~') {
    return path.join(os.homedir(), importPath.slice(1));
  }
  return path.resolve(importPath);
}
