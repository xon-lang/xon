import { lstatSync } from 'fs';
import glob from 'glob';
import path from 'path';
import { String } from '../../lib/core';
import { parseSourceFile } from '../../util/parse';
import { ModuleTree } from './module-tree';

export function getModuleTree(name: String, sourceName: String): ModuleTree {
  return new ModuleTree(name, sourceName);
}

export function getModuleTreeFromPath(modulePath: String): ModuleTree {
  const globPath = path.join(modulePath, '*.xon');
  const sourceFiles = glob.sync(globPath);
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));
  const moduleName = path.basename(modulePath);
  const moduleTree = getModuleTree(moduleName, modulePath);
  moduleTree.addChildren(...sourceTrees);

  const innerModulesPathPattern = path.join(modulePath, '*');
  const modulesPaths = glob.sync(innerModulesPathPattern).filter((x) => lstatSync(x).isDirectory());
  for (const innerModulePath of modulesPaths) {
    const childModule = getModuleTreeFromPath(innerModulePath);
    moduleTree.addChildren(childModule);
  }

  return moduleTree;
}
