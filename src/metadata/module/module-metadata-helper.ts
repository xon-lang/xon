import { getShadowSourceMetadata } from '~/metadata/declaration/declaration-metadata-helper';
import { ModuleMetadata } from '~/metadata/module/module-metadata';
import { ModuleTree } from '~/tree/module/module-tree';

export function getModuleMetadata(tree: ModuleTree): ModuleMetadata {
  tree.metadata = new ModuleMetadata(tree);

  return tree.metadata as ModuleMetadata;
}

export function updateModuleMetadataScope(tree: ModuleTree): void {
  for (const source of tree.sources) {
    getShadowSourceMetadata(source);
  }
  for (const module of tree.modules) {
    updateModuleMetadataScope(module);
  }
}

// const modulesCache: Map<String, ModuleDeclarationMetadata> = new Map();

// export function getModuleDeclarationMetadata(
//   name: String,
//   trees: SourceTree[],
//   parent: ModuleDeclarationMetadata = null,
// ): ModuleDeclarationMetadata {
//   const declarationMetadata = new ModuleDeclarationMetadata(null);
//   declarationMetadata.name = name;
//   declarationMetadata.scope = new DeclarationScope(parent?.scope);

//   for (const tree of trees) {
//     declarationMetadata.scope.declarations.push(...getShadowSourceMetadata(tree));
//   }

//   for (const tree of trees) {
//     tree.scope.parent = declarationMetadata.scope;
//     tree.metadata = getSourceMetadata(tree);
//   }

//   return declarationMetadata;
// }

// export function getModuleDeclarationMetadataByModulePath(
//   modulePath: String,
//   parent: ModuleDeclarationMetadata = null,
// ): ModuleDeclarationMetadata {
//   if (modulesCache.has(modulePath)) {
//     return modulesCache.get(modulePath);
//   }

//   const globPath = path.join(modulePath, '*.xon');
//   const files = glob.sync(globPath);
//   const trees = files.map((x) => parseSourceFile(x));
//   const name = path.basename(modulePath);
//   const declaration = getModuleDeclarationMetadata(name, trees, parent);

//   modulesCache.set(modulePath, declaration);

//   const foldersGlobPath = path.join(modulePath, '*');
//   const directories = glob.sync(foldersGlobPath).filter((x) => lstatSync(x).isDirectory());
//   for (const folderPath of directories) {
//     const childModule = getModuleDeclarationMetadataByModulePath(folderPath, declaration);
//     declaration.scope.add(childModule);
//   }

//   return declaration;
// }
