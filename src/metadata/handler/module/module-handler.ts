import { SourceTree } from '../../../tree/source/source-tree';
import { MetadataHandler } from '../metadata-handler';

export class ModuleHandler extends MetadataHandler {
  handle(sources: SourceTree[]) {
    for (const sourceTree of sources) {
      for (const definition of sourceTree.definitions) {
        this.scope.addDeclaration(definition);
      }
      for (const attribute of sourceTree.attributes) {
        this.scope.addDeclaration(attribute);
      }
    }
  }
}
