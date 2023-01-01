import { String2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { getSourceDeclarationMetadata } from '~/metadata/declaration/declaration-metadata-helper';
import { getModuleTreeFromPath } from '~/tree/module/module-tree-helper';
import { PathFs } from '~/util/fs/path-fs';
import { parseSourceFile } from '~/util/parse';

export class ImportProvider {
  private static cache = new Map<String2, DeclarationMetadata[]>();
  static instance = new ImportProvider();

  declarations(importPath: String2): DeclarationMetadata[] {
    const pathFs = new PathFs(importPath);
    const cacheDeclarations = ImportProvider.cache.get(pathFs.fullPath);
    if (cacheDeclarations) {
      return cacheDeclarations;
    }
    if (pathFs.isFile()) {
      const sourceTree = parseSourceFile(pathFs.fullPath);

      return getSourceDeclarationMetadata(sourceTree);
    }
    if (pathFs.isDirectory()) {
      const moduleTree = getModuleTreeFromPath(pathFs.fullPath);
      const sourceTrees = moduleTree.sources;

      return sourceTrees.map(getSourceDeclarationMetadata).flat();
    }

    return [];
  }
}
