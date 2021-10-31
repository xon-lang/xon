import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { AttributeClassMemberTree } from '../../../tree/definition/class-definition/class-member/attribute-class-member/attribute-class-member-tree';
import { DeclarationHandler } from '../attribute/attribute-handler';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';

export class ClassTypeHandler extends MetadataHandler {
  public constructor(scope: HandlerScope = null) {
    super(new HandlerScope(scope || new HandlerScope()));
  }

  handle(tree: ClassDefinitionTree) {
    this.scope.addDefinition(tree);

    this.handleProperties(tree.attributes);
  }

  handleProperties(properties: AttributeClassMemberTree[]) {
    for (const property of properties) {
      new DeclarationHandler(this.scope).handle(property);
    }
  }
}
