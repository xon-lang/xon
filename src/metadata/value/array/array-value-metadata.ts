import { ArrayExpressionTree } from '../../../tree/expression/array/array-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class ArrayValueMetadata extends ValueMetadata {
  constructor(private tree: ArrayExpressionTree, private scope: DeclarationScope) {
    super();
    tree.arguments.forEach((x) => (x.value.metadata = getValueMetadata(x.value, scope)));
  }

  type(): TypeMetadata {
    return this.scope.core.array;
  }

  eval() {
    throw new Error('Method not implemented.');
  }
}
