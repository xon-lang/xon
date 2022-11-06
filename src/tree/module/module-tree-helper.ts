import glob from 'glob';
import path from 'path';
import { String2 } from '~/lib';
import { ModuleTree, SourceTree } from '~/tree';
import { parseSourceFile } from '~/util';

export function getModuleTree(name: String2, sourceName: String2): ModuleTree {
  return new ModuleTree(name, sourceName);
}

export function getModuleTreeFromPath(modulePath: String2): ModuleTree {
  const moduleName = path.basename(modulePath);
  const moduleTree = getModuleTree(moduleName, modulePath);

  const sourceTrees = getSourceTreesFromPath(modulePath);
  moduleTree.addChildren(...sourceTrees);

  const innerModules = getInnerModules(modulePath);
  moduleTree.addChildren(...innerModules);

  return moduleTree;
}

function getSourceTreesFromPath(modulePath: String2): SourceTree[] {
  const globPath = path.join(modulePath, '*.xon');
  const sourceFiles = glob.sync(globPath, { nodir: true });
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));
  return sourceTrees;
}

function getInnerModules(modulePath: String2): ModuleTree[] {
  const globPath = path.join(modulePath, '*/');
  const modulesDirectories = glob.sync(globPath);
  const modules = modulesDirectories.map(getModuleTreeFromPath);
  return modules;
}
