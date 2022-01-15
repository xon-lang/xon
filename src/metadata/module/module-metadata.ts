import * as glob from 'glob';
import * as path from 'path';
import { FactoryStatementTree } from '../../tree/statement/factory/factory-statement-tree';
import { ModelStatementTree } from '../../tree/statement/model/model-statement-tree';
import { ObjectStatementTree } from '../../tree/statement/object/object-statement-tree';
import { parseSourceFile } from '../../util/parse';
import { DeclarationScope } from '../declaration-scope';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { getDeclarationMetadata } from '../declaration/declaration-metadata-helper';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: string, scope: DeclarationScope) {
    const innerScope = new DeclarationScope(scope);
    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const source of sources) {
      for (const statement of source.statements) {
        if (
          statement instanceof ModelStatementTree ||
          statement instanceof ObjectStatementTree ||
          statement instanceof FactoryStatementTree
        ) {
          const declaration = getDeclarationMetadata(statement, innerScope);
          this.declarations.push(declaration);
        }
      }
    }

    innerScope.declarations = this.declarations;
  }
}
