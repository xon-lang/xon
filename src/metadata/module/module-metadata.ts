import * as glob from 'glob';
import * as path from 'path';
import { parseSourceFile } from '../../ast/util/parse';
import { DeclarationScope } from '../declaration-scope';
import { DefinitionMetadata } from '../declaration/definition/definition-metadata';
import { getDefinitionMetadata } from '../declaration/definition/definition-metadata-helper';

export class ModuleMetadata {
  definitions: DefinitionMetadata[] = [];

  constructor(moduleDir: string, scope: DeclarationScope) {
    const innerScope = new DeclarationScope(scope);

    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));
    for (const source of sources) {
      // for (const library of source.imports) {
      //   // imports
      // }
      for (const definition of source.definitions) {
        const definitionMetadata = getDefinitionMetadata(definition, innerScope);
        this.definitions.push(definitionMetadata);
      }
    }

    innerScope.declarations = this.definitions;
  }
}
