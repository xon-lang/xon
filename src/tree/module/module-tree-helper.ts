import { sync } from 'glob';
import { basename, join } from 'path';
import { String2 } from '~/lib/core';
import { ModuleTree } from '~/tree/module/module-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { parseSourceFile } from '~/util/parse';

export function getModuleTree(name: String2, sourceName: String2): ModuleTree {
  return new ModuleTree(name, sourceName);
}

export function getModuleTreeFromPath(modulePath: String2): ModuleTree {
  const moduleName = basename(modulePath);
  const moduleTree = getModuleTree(moduleName, modulePath);

  const sourceTrees = getSourceTreesFromPath(modulePath);
  moduleTree.addChildren(...sourceTrees);

  const innerModules = getInnerModules(modulePath);
  moduleTree.addChildren(...innerModules);

  return moduleTree;
}

function getSourceTreesFromPath(modulePath: String2): SourceTree[] {
  const globPath = join(modulePath, '*.xon');
  const sourceFiles = sync(globPath, { nodir: true });
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));
  return sourceTrees;
}

function getInnerModules(modulePath: String2): ModuleTree[] {
  const globPath = join(modulePath, '*/');
  const modulesDirectories = sync(globPath);
  const modules = modulesDirectories.map(getModuleTreeFromPath);
  return modules;
}
