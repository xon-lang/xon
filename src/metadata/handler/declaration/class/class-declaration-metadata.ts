import { ClassDefinitionTree } from '../../../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../../../tree/id-token';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { DeclarationMetadata } from '../declaration-metadata';

export class ClassDeclarationMetadata extends DeclarationMetadata {
  id: IdToken;
  init: FunctionTypeMetadata;

  constructor(private tree: ClassDefinitionTree, private scope: DeclarationScope) {
    super();

    this.id = tree.id;
  }

  parseBody(){
    this.init = new FunctionTypeMetadata(this.tree.)
  }
}
