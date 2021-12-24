import { ValueAttributeNode } from '../../../../ast/attribute/value/value-attribute-node';
import { DeclarationScope } from '../../../declaration-scope';
import { getExpressionMetadata } from '../../../expression/expression-metadata-helper';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../attribute-metadata';

export class ValueAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private node: ValueAttributeNode, private scope: DeclarationScope) {
    super();

    this.name = node.id.text;
  }

  type(): TypeMetadata {
    if (this.node.type) return getTypeMetadata(this.node.type, this.scope);

    const expression = getExpressionMetadata(this.node.value, this.scope);
    return expression.type;
  }
}
