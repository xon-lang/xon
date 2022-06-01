import { String } from '../../lib/core';
import { parseSourceFile } from '../../util/parse';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getSourceMetadata } from '../source/source-metadata-helper';

export class ModuleMetadata {
  constructor(files: String[]) {
    const scope = new DeclarationScope();
    const sourceTrees = files.map((x) => parseSourceFile(x));

    for (const tree of sourceTrees) {
      tree.metadata = getSourceMetadata(tree, scope);
    }
  }
}
