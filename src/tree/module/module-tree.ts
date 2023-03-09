import { String2 } from '~/lib/core';
import { Source } from '~/source/source';
import { SourcePosition } from '~/source/source-position';
import { SourceSpan } from '~/source/source-span';
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
    const source = new Source('', null);
    const start = SourcePosition.fromIndex(source, 0);
    const end = SourcePosition.fromIndex(source, 0);
    super(new SourceSpan(source, start, end));
  }
}
