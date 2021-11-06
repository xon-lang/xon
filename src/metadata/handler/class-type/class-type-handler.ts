import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { FunctionTypeMetadata } from '../../type/function-type/function-type-metadata';
import { GenericTypeMetadata } from '../../type/generic-type/generic-type-metadata';
import { AttributeHandler } from '../attribute/attribute-handler';
import { HandlerScope } from '../handler-scope';
import { MetadataHandler } from '../metadata-handler';

export class ClassTypeHandler extends MetadataHandler {
  constructor(scope: HandlerScope = null) {
    super(new HandlerScope(scope || new HandlerScope()));
  }

  handle(tree: ClassDefinitionTree) {
    const genericArguments = tree.genericParameters.map((x) => new GenericTypeMetadata(x));
    tree.typeMetadata = FunctionTypeMetadata.fromClassDefinitionTree(tree, genericArguments);
    tree.id.declarationLink = tree.id.sourceReference;
    for (const attribute of tree.attributes) {
      new AttributeHandler(this.scope).handle(attribute);
    }
  }
}
