import { globSync } from 'glob';
import { basename, join } from 'path';
import { Module } from '~/compiler/module/module';
import { parseSourceFile } from '~/compiler/parser/parser';
import { String2 } from '~/lib/core';
import { SourceNode } from '~/node/source/source-node';

export function getModuleFromLocation(location: String2): Module {
  const name = basename(location);

  const sources = getSourcesFromPath(location);

  const modules = getInnerModules(location);

  return {
    name,
    location,
    sources,
    modules,
  };
}

function getSourcesFromPath(modulePath: String2): SourceNode[] {
  const globPath = join(modulePath, '*.xon');
  const sourceFiles = globSync(globPath, { nodir: true });
  const sourceTrees = sourceFiles.map((x) => parseSourceFile(x));

  return sourceTrees;
}

function getInnerModules(location: String2): Module[] {
  const globPath = join(location, '*/');
  const modulesDirectories = globSync(globPath);
  const modules = modulesDirectories.map(getModuleFromLocation);

  return modules;
}
