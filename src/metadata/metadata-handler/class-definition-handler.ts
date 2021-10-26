import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { MetadataHandler, Scope } from './metadata-handler';

export class ClassDefinitionHandler extends MetadataHandler {
  constructor(scope: Scope) {
    super(new Scope(scope));
  }

  handle(tree: ClassDefinitionTree) {}

  setClassPropertiesMetadata(tree: ClassDefinitionTree) {
    tree.members;
  }

  setClassMethodsMetadata(tree: ClassDefinitionTree) {
    const scope = new Scope(this.scope);
  }
}
