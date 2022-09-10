import { String } from '../../lib/core';
import { SourceRange } from '../../util/source-range';
import { Tree } from '../tree';

export class ModuleTree extends Tree {
  sourceRange = new SourceRange();

  constructor(public name: String, sourceName: String) {
    super();
    this.sourceRange.sourceName = sourceName;
  }
}
