import { lstatSync } from 'fs';
import { glob } from 'glob';
import path from 'path';
import { DefinitionStatementTree } from '../tree/statement/definition/definition-statement-tree';
import { OperatorStatementTree } from '../tree/statement/operator/operator-statement-tree';
import { ParameterStatementTree } from '../tree/statement/parameter/parameter-statement-tree';
import { parseSourceFile } from '../util/parse';
import { DeclarationScope } from './declaration/scope/declaration-scope';
import { getStatementMetadata } from './statement/statement-metadata-helper';

export class ImportProvider {
  constructor(private importPath: string) {}

  scope(): DeclarationScope {
    const stats = lstatSync(this.importPath);
    if (!stats.isDirectory()) throw new Error('Should be a directory');

    const globPath = path.resolve(this.importPath, '*.xon');
    const files = glob.sync(globPath);
    const sources = files.map((x) => parseSourceFile(x));
    const scope = new DeclarationScope();

    for (const sourceTree of sources) {
      for (const statement of sourceTree.statements) {
        if (
          statement instanceof ParameterStatementTree ||
          statement instanceof OperatorStatementTree ||
          statement instanceof DefinitionStatementTree
        ) {
          getStatementMetadata(statement, scope);
        }
      }
    }
    return scope;
  }
}
