import { ExpressionParameterTree } from '../../../tree/expression-parameter/expression-parameter.tree';
import { MetadataHandler } from '../metadata-handler';
import { TypeHandler } from '../type/type-handler';

export class ParameterHandler extends MetadataHandler {
  handle(tree: ExpressionParameterTree) {
    new TypeHandler().handle(tree.type);
    tree.typeMetadata = tree.type.typeMetadata;

    this.scope.addDeclaration(tree);
  }
}
