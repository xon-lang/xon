import * as glob from 'glob';
import * as path from 'path';
import { String } from '../../lib/core';
import { parseSourceFile } from '../../util/parse';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { DeclarationScope } from '../scope/declaration-scope';
import { getSourceMetadata } from '../source/source-metadata-helper';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: String) {
    const scope = new DeclarationScope();
    const globPath = path.resolve(moduleDir, '**/*.xon');
    const trees = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const tree of trees) {
      tree.metadata = getSourceMetadata(tree, scope);
    }
  }
}
