import { String2 } from '~/lib/core';
import { SourceTree } from '~/tree/source/source-tree';
import { Tree } from '~/tree/tree';

export class ModuleTree extends Tree {
  get modules(): ModuleTree[] {
    return this.children.filter((x) => x instanceof ModuleTree) as ModuleTree[];
  }

  get sources(): SourceTree[] {
    return this.children.filter((x) => x instanceof SourceTree) as SourceTree[];
  }

  constructor(public name: String2, public location: String2) {
    super();
  }
}
