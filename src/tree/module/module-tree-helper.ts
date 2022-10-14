import glob from 'glob';
import path from 'path';
import { String } from '../../lib/core';
import { parseSourceFile } from '../../util/parse';
import { SourceTree } from '../source/source-tree';
import { ModuleTree } from './module-tree';

export function getModuleTree(name: String, sourceName: String): ModuleTree {
  return new ModuleTree(name, sourceName);
}

export function getModuleTreeFromPath(modulePath: String): ModuleTree {
  const moduleName = path.basename(modulePath);
  const moduleTree = getModuleTree(moduleName, modulePath);

  const sourceTrees = getSourceTreesFromPath(modulePath);
  moduleTree.addChildren(...sourceTrees);

  const innerModules = getInnerModules(modulePath);
  moduleTree.addChildren(...innerModules);

  return moduleTree;
}

function getSourceTreesFromPath(modulePath: String): SourceTree[] {
  const globPath = path.join(modulePath, '*.xon');
  const sourceFiles = glob.sync(globPath, { nodir: true });
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));
  return sourceTrees;
}

function getInnerModules(modulePath: String): ModuleTree[] {
  const globPath = path.join(modulePath, '*/');
  const modulesDirectories = glob.sync(globPath);
  const modules = modulesDirectories.map(getModuleTreeFromPath);
  return modules;
}
