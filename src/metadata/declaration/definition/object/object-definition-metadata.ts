import { ObjectDefinitionNode } from '../../../../ast/definition/object/object-definition-node';
import { DeclarationScope } from '../../../declaration-scope';
import { IdTypeMetadata } from '../../../type/id/id-type-metadata';
import { TypeMetadata } from '../../../type/type-metadata';
import { DefinitionMetadata } from '../definition-metadata';

export class ObjectDefinitionMetadata extends DefinitionMetadata {
  name: string;
  type: TypeMetadata;
  // generics: GenericMetadata[] = [];

  // _ancestors: TypeMetadata[];
  // get ancestors(): TypeMetadata[] {
  //   if (this._ancestors) return this._ancestors;
  //   return (this._ancestors = this.tree.ancestors.map((x) => getTypeMetadata(x, this.scope)));
  // }

  // _attributes: AttributeMetadata[];
  // get attributes(): AttributeMetadata[] {
  //   if (this._attributes) return this._attributes;

  //   this._attributes = this.tree.attributes.map((x) => getAttributeMetadata(x, this.scope));
  //   return (this._attributes = [
  //     ...this._attributes,
  //     ...this.ancestors.flatMap((x) => x.attributes),
  //   ]);
  // }

  constructor(tree: ObjectDefinitionNode, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.type = new IdTypeMetadata(this.name, []);
  }
  useTypeArguments(args: DefinitionMetadata[]): DefinitionMetadata {
    return this;
  }

  // type(typeArguments: TypeMetadata[]): IdTypeMetadata {
  //   return new IdTypeMetadata(this.name, typeArguments, this.scope);
  // }
}
