import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { PropertyClassMemberTree } from '../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { ExpressionHandler } from '../expression/expression-handler';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';
import { TypeHandler } from '../type/type-handler';

export class ClassTypeHandler extends MetadataHandler {
  public constructor(scope: HandlerScope) {
    super(new HandlerScope(scope));
  }

  handle(tree: ClassDefinitionTree) {
    this.scope.addDefinition(tree);

    this.handleProperties(
      tree.members
        .filter((x) => x instanceof PropertyClassMemberTree)
        .map((x) => x as PropertyClassMemberTree),
    );
  }

  handleProperties(properties: PropertyClassMemberTree[]) {
    for (const property of properties) {
      property.id.declarationLink = property.id.sourceReference
      property.typeMetadata

      property.id.declarationLink = property.id.sourceReference;
      if (property.type) new TypeHandler(this.scope).handle(property.type);
      if (property.value) new ExpressionHandler(this.scope).handle(property.value);
      property.typeMetadata = property.type?.typeMetadata || property.value.typeMetadata;
      this.scope.addDeclaration(property);
      return;

      this.scope.addDeclaration(property);
    }
  }
}
