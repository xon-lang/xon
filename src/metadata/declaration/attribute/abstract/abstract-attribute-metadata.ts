import { AbstractAttributeTree } from '../../../../tree/attribute/abstract/abstract-attribute-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../attribute-metadata';

export class AbstractAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private tree: AbstractAttributeTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(): TypeMetadata {
    return getTypeMetadata(this.tree.type);
  }
}
