import { ValueAttributeTree } from '../../../../tree/attribute/value/value-attribute-tree';
import { DeclarationScope } from '../../../declaration-scope';
import { getExpressionMetadata } from '../../../expression/expression-metadata-helper';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { DeclarationMetadata } from '../../declaration-metadata';

export class ValueAttributeMetadata extends DeclarationMetadata {
  name: string;

  constructor(private tree: ValueAttributeTree, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(): TypeMetadata {
    if (this.tree.type) return getTypeMetadata(this.tree.type, this.scope);

    const expression = getExpressionMetadata(this.tree.expression, this.scope);
    return expression.type;
  }
}
