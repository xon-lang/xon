import * as glob from 'glob';
import * as path from 'path';
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
      for (const definition of source.definitions) {
        const declaration = getDeclarationMetadata(definition, innerScope);
        this.declarations.push(declaration);
        innerScope.add(declaration);
      }
    }
  }
}
