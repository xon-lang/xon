import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { MetadataHandler } from '../metadata-handler';

export class TypeHandler extends MetadataHandler {
  handle(tree: TypeTree) {
    if (tree instanceof IdTypeTree) {
      tree.typeMetadata = this.scope.findDefinition(tree.name, tree.genericArguments.length);
      tree.id.declarationLink = tree.typeMetadata.id.sourceReference;
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
