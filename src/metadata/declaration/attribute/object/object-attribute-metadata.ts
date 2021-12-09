import { AbstractAttributeTree } from '../../../../tree/attribute/abstract/abstract-attribute-tree';
import { ObjectAttributeTree } from '../../../../tree/attribute/object/object-attribute-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { DeclarationMetadata } from '../../declaration-metadata';

export class ObjectAttributeMetadata extends DeclarationMetadata {
  name: string;

  constructor(private tree: ObjectAttributeTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(): TypeMetadata {
    return getTypeMetadata(th is.tree.type, this.scope);
  }
}
