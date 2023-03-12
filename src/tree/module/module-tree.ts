import { String2 } from '~/lib/core';
import { SourceTree } from '~/tree/source/source-tree';
import { Tree } from '~/tree/tree';

export class ModuleTree implements Tree {
  constructor(public name: String2, public innerModules: ModuleTree[], public sources: SourceTree[]) {}
}
