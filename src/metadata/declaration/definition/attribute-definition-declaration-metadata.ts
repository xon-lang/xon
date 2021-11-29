import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { AttributeDefinitionTree } from '../../../tree/definition/attribute-definition/attribute-definition-tree';
import { DeclarationScope } from '../../declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DefinitionDeclarationMetadata } from './definition-declaration-metadata';

export class AttributeDefinitionDeclarationMetadata extends DefinitionDeclarationMetadata {
  attributes: AttributeTree[] = [];
  name: string;

  constructor(protected tree: AttributeDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.attributes = tree.attributes;
  }

  ancestor(): IdTypeMetadata {
    if (!this.tree.ancestor) return null;
    return getTypeMetadata(this.tree.ancestor, this.scope) as IdTypeMetadata;
  }

  type(typeArguments: TypeMetadata[]): IdTypeMetadata {
    return new IdTypeMetadata(this.name, typeArguments, this.scope);
  }
}
