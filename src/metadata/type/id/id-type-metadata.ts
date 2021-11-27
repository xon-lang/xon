import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class IdTypeMetadata extends TypeMetadata {
  constructor(
    public typeArguments: TypeMetadata[],
    public declaration: ClassDeclarationMetadata,
    public scope: DeclarationScope,
  ) {
    super();
  }

  static fromTree(tree: IdTypeTree, scope: DeclarationScope) {
    const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(tree, scope));
    const declaration = scope.get(tree.id.text) as ClassDeclarationMetadata;
    const metadata = new IdTypeMetadata(typeArguments, declaration, scope);
    return metadata;
  }
}
