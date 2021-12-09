import { AttributeTree } from '../../../../tree/attribute/attribute-tree';
import { ObjectDefinitionTree } from '../../../../tree/definition/object/object-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { GenericMetadata } from '../../generic/generic-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class ObjectDefinitionMetadata extends DefinitionMetadata {
  name: string;
  generics: GenericMetadata[] = [];
  attributes: AttributeTree[] = [];

  _ancestors: TypeMetadata[];
  get ancestors(): TypeMetadata[] {
    if (this._ancestors) return this._ancestors;
    return (this._ancestors = this.tree.ancestors.map((x) => getTypeMetadata(x, this.scope)));
  }

  constructor(protected tree: ObjectDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.attributes = tree.attributes;
  }

  // type(typeArguments: TypeMetadata[]): IdTypeMetadata {
  //   return new IdTypeMetadata(this.name, typeArguments, this.scope);
  // }
}
