import { AliasDefinitionTree } from '../../../../tree/definition/alias/alias-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class AliasDefinitionMetadata extends DefinitionMetadata {
  name: string;

  constructor(protected tree: AliasDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(typeArguments: TypeMetadata[]): TypeMetadata {
    throw new Error('Not implemented');
    // return getTypeMetadata(this.tree.type, scope);
  }
}
