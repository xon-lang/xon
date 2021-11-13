import { ParameterTree } from '../../../tree/parameter/parameter.tree';
import { MetadataHandler } from '../metadata-handler';
import { TypeHandler } from '../type/type-handler';

export class ParameterHandler extends MetadataHandler {
  handle(tree: ParameterTree) {
    new TypeHandler().handle(tree.type);
    tree.typeMetadata = tree.type.typeMetadata;

    this.scope.addDeclaration(tree);
  }
}
