import glob from 'glob';
import path from 'path';
import { String } from '../../lib/core';
import { parseSourceFile } from '../../util/parse';
import { ModuleTree } from './module-tree';

export function getModuleTree(name: String, sourceName: String): ModuleTree {
  return new ModuleTree(name, sourceName);
}

export function getModuleTreeFromPath(modulePath: String): ModuleTree {
  const normalizedModulePath = path.join(modulePath, '/');
  const globPath = path.join(normalizedModulePath, '*.xon');
  const sourceFiles = glob.sync(globPath, { nodir: true });
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));
  const moduleName = path.basename(normalizedModulePath);
  const moduleTree = getModuleTree(moduleName, normalizedModulePath);
  moduleTree.addChildren(...sourceTrees);

  const innerModulesPathPattern = path.join(normalizedModulePath, '*/');
  const modulesPaths = glob.sync(innerModulesPathPattern);
  for (const innerModulePath of modulesPaths) {
    const childModule = getModuleTreeFromPath(innerModulePath);
    moduleTree.addChildren(childModule);
  }

  return moduleTree;
}
