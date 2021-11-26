import { IdTypeTree } from '../../../../tree/type/id-type/id-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';
import { getTypeMetadata } from '../type-metadata-helper';

export class IdTypeMetadata extends TypeMetadata {
  name: string;
  declaration: ClassDeclarationMetadata;
  typeArguments: TypeMetadata[] = [];

  constructor(tree: IdTypeTree, scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.declaration = scope.get(tree.id.text) as ClassDeclarationMetadata;
    this.typeArguments = tree.typeArguments.map((x) => getTypeMetadata(tree, scope));
  }
}
