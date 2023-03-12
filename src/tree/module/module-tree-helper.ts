import { globSync } from 'glob';
import { basename, join } from 'path';
import { String2 } from '~/lib/core';
import { ModuleTree } from '~/tree/module/module-tree';
import { SourceNode } from '~/tree/source/source-tree';
import { parseSourceFile } from '~/util/parse';

export function getModuleTree(name: String2, location: String2): ModuleTree {
  return new ModuleTree(name, location);
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

function getSourceTreesFromPath(modulePath: String2): SourceNode[] {
  const globPath = join(modulePath, '*.xon');
  const sourceFiles = globSync(globPath, { nodir: true });
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));

  return sourceTrees;
}

function getInnerModules(modulePath: String2): ModuleTree[] {
  const globPath = join(modulePath, '*/');
  const modulesDirectories = globSync(globPath);
  const modules = modulesDirectories.map(getModuleTreeFromPath);

  return modules;
}
