import { ArrayExpressionTree } from '../../../tree/expression/array-expression/array-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ArrayTypeMetadata } from '../../type/array/array-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class ArrayExpressionMetadata extends ExpressionMetadata {
  type: ArrayTypeMetadata;

  constructor(tree: ArrayExpressionTree, scope: DeclarationScope) {
    super();

    // todo make union later
    const firstItemType = getExpressionMetadata(tree.items[0], scope).type;
    this.type = new ArrayTypeMetadata(firstItemType, scope);
  }
}
