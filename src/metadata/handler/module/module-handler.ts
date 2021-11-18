import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { MetadataHandler } from '../metadata-handler';
export class ModuleHandler extends MetadataHandler {
  handle(definitions: DefinitionTree[]) {
    for (const definition of definitions) {
      this.scope.addDeclaration(definition);
    }
  }
}
