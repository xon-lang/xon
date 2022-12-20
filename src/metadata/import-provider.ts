import { lstatSync } from 'fs';
import { homedir } from 'os';
import { join, resolve } from 'path';
import { Boolean2, String2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { getSourceDeclarationMetadata } from '~/metadata/declaration/declaration-metadata-helper';
import { getModuleTreeFromPath } from '~/tree/module/module-tree-helper';
import { parseSourceFile } from '~/util/parse';

export class ImportProvider {
  private static cache = new Map<String2, DeclarationMetadata[]>();
  static instance = new ImportProvider();

  declarations(importPath: String2): DeclarationMetadata[] {
    const location = resolvePath(importPath);
    const cacheDeclarations = ImportProvider.cache.get(location);
    if (cacheDeclarations) {
      return cacheDeclarations;
    }
    if (isFile(location)) {
      const sourceTree = parseSourceFile(location);

      return getSourceDeclarationMetadata(sourceTree);
    }
    if (isDirectory(location)) {
      const moduleTree = getModuleTreeFromPath(location);
      const sourceTrees = moduleTree.sources;

      return sourceTrees.map(getSourceDeclarationMetadata).flat();
    }

    return [];
  }
}

function resolvePath(importPath: String2): String2 {
  if (importPath[0] === '~') {
    return join(homedir(), importPath.slice(1));
  }

  return resolve(importPath);
}

function isDirectory(fullPath: String2): Boolean2 {
  try {
    const stats = lstatSync(fullPath);

    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

function isFile(fullPath): Boolean2 {
  try {
    const stats = lstatSync(fullPath);

    return stats.isFile();
  } catch (error) {
    return false;
  }
}
