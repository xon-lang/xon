import { AttributeTree } from '../../../../tree/attribute/attribute-tree';
import { ObjectDefinitionTree } from '../../../../tree/definition/object/object-definition-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { DefinitionMetadata } from '../definition-metadata';

export class ObjectDefinitionMetadata extends DefinitionMetadata {
  attributes: AttributeTree[] = [];
  name: string;

  // _ancestor: IdTypeMetadata;
  // get ancestor(): IdTypeMetadata {
  //   if (this._ancestor !== undefined) return this._ancestor;
  //   if (!this.tree.ancestor) return (this._ancestor = null);
  //   return (this._ancestor = getTypeMetadata(
  //     this.tree.ancestor.type,
  //     this.scope,
  //   ) as IdTypeMetadata);
  // }

  constructor(protected tree: ObjectDefinitionTree, protected scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    this.attributes = tree.attributes;
  }

  // type(typeArguments: TypeMetadata[]): IdTypeMetadata {
  //   return new IdTypeMetadata(this.name, typeArguments, this.scope);
  // }
}
