import { glob } from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { parseSourceFile } from '../../../tree/parse';

export class ModuleMetadata {
  moduleDir: string;
  declarations = new Map<string, DefinitionTree>();

  constructor(moduleDir: string) {
    this.moduleDir = moduleDir;

    const sourceTrees = glob
      .sync(path.resolve(moduleDir, '**/*.xon'))
      .map((x) => path.resolve(__dirname, x))
      .map((x) => parseSourceFile(x));

    for (const sourceTree of sourceTrees) {
      for (const definition of sourceTree.definitions)
        if (definition instanceof ClassDefinitionTree) {
          const name = `${definition.id.text}<${definition.typeParameters.length}>`;
          this.declarations.set(name, definition);
        }
    }
    // for (const attribute of sourceTree.attributes) {
    //   this.scope.addDeclaration(attribute);
    // }
  }
}
