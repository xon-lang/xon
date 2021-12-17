import { ArrayExpressionNode } from '../../../tree/expression/array/array-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TupleTypeMetadata } from '../../type/tuple/tuple-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class ArrayExpressionMetadata extends ExpressionMetadata {
  type: TupleTypeMetadata;

  constructor(tree: ArrayExpressionNode, scope: DeclarationScope) {
    super();

    const itemsTypes = tree.items.map((x) => getExpressionMetadata(x, scope).type);
    this.type = new TupleTypeMetadata(itemsTypes);
  }
}
