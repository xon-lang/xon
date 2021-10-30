import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { PropertyClassMemberTree } from '../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';

export class ClassTypeHandler extends MetadataHandler {
  a: string;
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
      this.scope.addDeclaration(property);
    }
  }
}
