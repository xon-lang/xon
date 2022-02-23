import * as glob from 'glob';
import * as path from 'path';
import { ParameterStatementTree } from '../../tree/statement/parameter/parameter-statement-tree';
import { ObjectStatementTree } from '../../tree/statement/object/object-statement-tree';
import { parseSourceFile } from '../../util/parse';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { getDeclarationMetadata } from '../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: string, scope: DeclarationScope) {
    const innerScope = scope.create();
    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const source of sources) {
      for (const statement of source.statements) {
        if (statement instanceof ParameterStatementTree || statement instanceof ObjectStatementTree) {
          const declaration = getDeclarationMetadata(statement, innerScope);
          this.declarations.push(declaration);
          innerScope.add(declaration);
        }
      }
    }
  }
}
