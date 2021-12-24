import { MethodAttributeNode } from '../../../../ast/attribute/method/method-attribute-node';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../attribute-metadata';

export class MethodAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private node: MethodAttributeNode, private scope: DeclarationScope) {
    super();

    this.name = node.id.text;
  }

  type(): TypeMetadata {
    return getTypeMetadata(this.node.type);
  }
}
