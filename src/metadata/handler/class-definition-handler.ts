import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { HandlerScope } from './handler-scope';

export class ClassTypeHandler extends MetadataHandler {
  constructor(parentScope: HandlerScope) {
    super(new HandlerScope(parentScope));
  }

  handle(tree: ClassDefinitionTree) {}

  setClassPropertiesMetadata(tree: ClassDefinitionTree) {
    tree.members;
  }

  setClassMethodsMetadata(tree: ClassDefinitionTree) {
    const scope = new HandlerScope(this.scope);
  }
}
