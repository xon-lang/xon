import { ArrayExpressionTree } from '../../../tree/expression/array-expression/array-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TupleTypeMetadata } from '../../type/tuple/tuple-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class ArrayExpressionMetadata extends ExpressionMetadata {
  type: TupleTypeMetadata;

  constructor(tree: ArrayExpressionTree, scope: DeclarationScope) {
    super();

    const itemsTypes = tree.items.map((x) => getExpressionMetadata(x, scope).type);
    this.type = new TupleTypeMetadata(itemsTypes, scope);
  }
}
