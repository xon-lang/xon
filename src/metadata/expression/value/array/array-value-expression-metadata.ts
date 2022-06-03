import { ArrayExpressionTree } from '../../../../tree/expression/array/array-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeExpressionMetadata } from '../../type/type-expression-metadata';
import { ValueExpressionMetadata } from '../value-expression-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';

export class ArrayValueExpressionMetadata extends ValueExpressionMetadata {
  constructor(private tree: ArrayExpressionTree, private scope: DeclarationScope) {
    super();
    tree.arguments.forEach((x) => (x.value.metadata = getValueExpressionMetadata(x.value, scope)));
  }

  type(): TypeExpressionMetadata {
      return 
  }
}
