import * as glob from 'glob';
import * as path from 'path';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { parseSourceFile } from '../../../tree/parse';
import { MetadataHandler } from '../metadata-handler';
export class ModuleHandler extends MetadataHandler {
  public constructor() {
    super();
    // temp solution
    const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
    const sourceTrees = glob.sync(globPath).map((x) => parseSourceFile(x));
    for (const sourceTree of sourceTrees) {
      for (const definitionTree of sourceTree.definitions) {
        this.scope.addDeclaration(definitionTree);
      }
    }
  }

  handle(definitions: DefinitionTree[]) {
    for (const definition of definitions) {
      this.scope.addDeclaration(definition);
    }
  }
}
