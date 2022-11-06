import { String2 } from '~/lib';
import { SourceTree, Tree } from '~/tree';
import { SourceRange } from '~/util';

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
