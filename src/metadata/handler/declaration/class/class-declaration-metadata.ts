import { ClassDefinitionTree } from '../../../../tree/definition/class-definition/class-definition-tree';
import { IdToken } from '../../../../tree/id-token';
import { DeclarationMetadata } from '../declaration-metadata';

export class ClassDeclarationMetadata extends DeclarationMetadata {
  id: IdToken;

  constructor(tree: ClassDefinitionTree) {
    super();
  }
}
