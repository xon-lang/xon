import { AbstractAttributeNode } from '../../../../ast/attribute/abstract/abstract-attribute-node';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../attribute-metadata';

export class AbstractAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private node: AbstractAttributeNode, private scope: DeclarationScope) {
    super();

    this.name = node.id.text;
  }

  type(): TypeMetadata {
    return getTypeMetadata(this.node.type);
  }
}
