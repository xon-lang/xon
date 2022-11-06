import { String2 } from '~/lib/core';
import { SourceTree } from '~/tree/source/source-tree';
import { Tree } from '~/tree/tree';
import { SourceRange } from '~/util/source-range';

export class ModuleTree extends Tree {
  sourceRange = new SourceRange();

  get modules(): ModuleTree[] {
    return this.children.filter((x) => x instanceof ModuleTree) as ModuleTree[];
  }

  get sources(): SourceTree[] {
    return this.children.filter((x) => x instanceof SourceTree) as SourceTree[];
  }

  constructor(public name: String2, sourceName: String2) {
    super();
    this.sourceRange.sourceName = sourceName;
  }
}
