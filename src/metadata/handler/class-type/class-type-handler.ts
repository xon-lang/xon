import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { PropertyClassMemberTree } from '../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { DeclarationHandler } from '../declaration-handler/declaration-handler';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';

export class ClassTypeHandler extends MetadataHandler {
  public constructor(scope: HandlerScope) {
    super(new HandlerScope(scope));
  }

  handle(tree: ClassDefinitionTree) {
    this.scope.addDefinition(tree);

    this.handleProperties(tree.properties);
  }

  handleProperties(properties: PropertyClassMemberTree[]) {
    for (const property of properties) {
      new DeclarationHandler(this.scope).handle(property);
    }
  }
}
