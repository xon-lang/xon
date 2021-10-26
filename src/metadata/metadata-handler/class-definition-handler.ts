import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { MetadataHandler, Scope } from './metadata-handler';

export class ClassDefinitionHandler extends MetadataHandler {
  constructor(parentScope: Scope) {
    super(new Scope(parentScope));
  }

  handle(tree: ClassDefinitionTree) {}

  setClassPropertiesMetadata(tree: ClassDefinitionTree) {
    tree.members;
  }

  setClassMethodsMetadata(tree: ClassDefinitionTree) {
    const scope = new Scope(this.scope);
  }
}
