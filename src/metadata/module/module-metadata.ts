import * as glob from 'glob';
import * as path from 'path';
import { parseSourceFile } from '../../tree/parse';
import { DeclarationScope } from '../declaration-scope';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { getDefinitionMetadata } from '../declaration/definition/definition-metadata-helper';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: string, defaultModules: ModuleMetadata[] = []) {
    const scope = new DeclarationScope();

    for (const declaration of defaultModules.flatMap((x) => x.declarations)) {
      scope.set(declaration);
    }

    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));
    for (const source of sources) {
      for (const library of source.imports) {
        // imports
      }
      for (const definition of source.definitions) {
        scope.set(getDefinitionMetadata(definition, scope));
      }
    }

    this.declarations = [...scope.declarations.values()];
  }
}
