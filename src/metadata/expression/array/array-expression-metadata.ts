import { ArrayExpressionNode } from '../../../ast/expression/array/array-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class ArrayExpressionMetadata implements ExpressionMetadata {
  constructor(node: ArrayExpressionNode, scope: DeclarationScope) {
    // const itemsTypes = node.items.map((x) => getExpressionMetadata(x, scope).type);
    // this.type = new TupleTypeMetadata(itemsTypes);
  }

  attributes(): DeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }
}
