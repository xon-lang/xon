import * as glob from 'glob';
import * as path from 'path';
import { String } from '../../lib/core';
import { DefinitionStatementTree } from '../../tree/statement/definition/definition-tree';
import { parseSourceFile } from '../../util/parse';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { getDeclarationMetadata } from '../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: String, scope: DeclarationScope) {
    const innerScope = scope.create();
    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const source of sources) {
      for (const definition of source.statements.filter(
        (x) => x instanceof DefinitionStatementTree,
      )) {
        const declaration = getDeclarationMetadata(definition, innerScope);
        this.declarations.push(declaration);
        innerScope.add(declaration);
      }
    }
  }
}
