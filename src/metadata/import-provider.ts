import { lstatSync } from 'fs';
import { glob } from 'glob';
import path from 'path';
import { ParameterTree } from '../tree/parameter/parameter-tree';
import { SourceTree } from '../tree/source/source-tree';
import { DefinitionStatementTree } from '../tree/statement/definition/definition-statement-tree';
import { ParameterStatementTree } from '../tree/statement/parameter/parameter-statement-tree';
import { parseSourceFile } from '../util/parse';
import { DeclarationMetadata } from './declaration/declaration-metadata';
import { getDeclarationMetadata } from './declaration/declaration-metadata-helper';
import { DeclarationScope } from './scope/declaration-scope';

export class ImportProvider {
  constructor(private importPath: string) {}

  declarations(): DeclarationMetadata[] {
    const stats = lstatSync(this.importPath);
    if (!stats.isDirectory()) throw new Error('Should be a directory');

    const globPath = path.resolve(this.importPath, '*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));
    const scope = new DeclarationScope();
    const result = [];

    for (const sourceTree of sources) {
      for (const statement of sourceTree.statements) {
        if (
          statement instanceof SourceTree ||
          statement instanceof ParameterTree ||
          statement instanceof ParameterStatementTree ||
          statement instanceof DefinitionStatementTree
        ) {
          const declaration = getDeclarationMetadata(statement, scope);
          result.push(declaration);
        }
      }
    }
    return result;
  }
}
