import { IdTypeTree } from '../../../../tree/type/id-type/id-type.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { TypeMetadata } from '../type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  name: string;
  generics: TypeMetadata[] = [];
  declaration: ClassDeclarationMetadata;

  constructor(tree: IdTypeTree, scope: DeclarationScope) {
    super();

    this.declaration = scope.get(tree.id.text) as ClassDeclarationMetadata;
  }

  static fromDeclaration(declaration: ClassDeclarationMetadata){
    
  }
}
