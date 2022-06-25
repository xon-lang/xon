import { lstatSync } from 'fs';
import { glob } from 'glob';
import path from 'path';
import { parseSourceFile } from '../util/parse';
import { DeclarationScope } from './declaration/scope/declaration-scope';
import { getSourceMetadata } from './source/source-metadata-helper';

export class ImportProvider {
  constructor(private importPath: string) {}

  scope(): DeclarationScope {
    const fullImportPath = path.resolve(this.importPath);
    const stats = lstatSync(fullImportPath);
    if (!stats.isDirectory()) throw new Error('Should be a directory');

    const globPath = path.resolve(fullImportPath, '*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));
    const scope = new DeclarationScope();

    for (const tree of sources) {
      tree.metadata = getSourceMetadata(tree, scope, false);
    }
    return scope;
  }
}
