import { findDefinition } from '../../../provider/find-type-member';
import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { ExpressionHandler } from '../expression/expression-handler';
import { MetadataHandler } from '../metadata-handler';

export class TypeHandler extends MetadataHandler {
  handle(tree: TypeTree) {
    if (tree instanceof IdTypeTree) {
      tree.typeMetadata = this.scope.findDeclaration
      new ExpressionHandler(this.scope).handle(tree.expression);
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
