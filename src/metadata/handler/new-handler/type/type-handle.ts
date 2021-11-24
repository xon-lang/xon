import { IdTypeTree } from '../../../../tree/type/id-type/id-type.tree';
import { TypeTree } from '../../../../tree/type/type.tree';
import { Scope } from '../scope';

export function typeHandle(tree: TypeTree, scope: Scope) {
  if (tree instanceof IdTypeTree) {
    tree.typeArguments.forEach((x) => typeHandle(x, scope));
    const genericArguments = tree.typeArguments.map((x) => x.typeMetadata);
    tree.typeMetadata = scope.findDeclaration(tree.name, genericArguments.length);
    tree.id.declarationLink = tree.typeMetadata.sourceReference;
  }
}
