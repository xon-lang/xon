import { MethodAttributeNode } from '../../../../tree/attribute/method/method-attribute-node';
import { DeclarationScope } from '../../../declaration-scope';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../attribute-metadata';

export class MethodAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private tree: MethodAttributeNode, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(): TypeMetadata {
    return getTypeMetadata(this.tree.type);
  }
}
