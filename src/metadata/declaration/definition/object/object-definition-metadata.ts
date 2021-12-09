import { ObjectDefinitionTree } from '../../../../tree/definition/object/object-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../../attribute/attribute-metadata';
import { getAttributeMetadata } from '../../attribute/attribute-metadata-helper';
import { GenericMetadata } from '../../generic/generic-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class ObjectDefinitionMetadata extends DefinitionMetadata {
  name: string;
  generics: GenericMetadata[] = [];

  _ancestors: TypeMetadata[];
  get ancestors(): TypeMetadata[] {
    if (this._ancestors) return this._ancestors;
    return (this._ancestors = this.tree.ancestors.map((x) => getTypeMetadata(x, this.scope)));
  }

  _attributes: AttributeMetadata[];
  get attributes(): AttributeMetadata[] {
    if (this._attributes) return this._attributes;

    this._attributes = this.tree.attributes.map((x) => getAttributeMetadata(x, this.scope));
    return (this._attributes = [
      ...this._attributes,
      ...this.ancestors.flatMap((x) => x.attributes),
    ]);
  }

  constructor(protected tree: ObjectDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  // type(typeArguments: TypeMetadata[]): IdTypeMetadata {
  //   return new IdTypeMetadata(this.name, typeArguments, this.scope);
  // }
}
