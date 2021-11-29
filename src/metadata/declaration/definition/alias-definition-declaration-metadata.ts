import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { AliasDefinitionTree } from '../../../tree/definition/alias/alias-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { DefinitionDeclarationMetadata } from './definition-declaration-metadata';

export class AliasDefinitionDeclarationMetadata extends DefinitionDeclarationMetadata {
  ancestor: IdTypeMetadata = null;
  attributes: AttributeTree[] = [];
  name: string;

  constructor(protected tree: AliasDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(typeArguments: TypeMetadata[]): TypeMetadata {
    throw new Error('Method not implemented.');
  }
}
