import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { ClassTypeMetadata } from '../../type/id-type/class-type/class-type-metadata';
import { MetadataHandler } from '../metadata-handler';

export class TypeHandler extends MetadataHandler {
  handle(tree: TypeTree) {
    if (tree instanceof IdTypeTree) {
      tree.typeMetadata = this.scope.findIdType(tree.name, tree.genericArguments.length);
      if (tree.typeMetadata instanceof ClassTypeMetadata) {
        tree.typeMetadata.genericArguments = tree.genericArguments.map((x) => {
          this.handle(x);
          return x.typeMetadata;
        });
      }
      tree.id.declarationLink = tree.typeMetadata.sourceReference;
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
