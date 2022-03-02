import { ArrayExpressionTree } from '../../../tree/expression/array/array-expression-tree';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class ArrayExpressionMetadata implements ExpressionMetadata {
  constructor(tree: ArrayExpressionTree, scope: DeclarationScope) {
    // const itemsTypes = tree.items.map((x) => getExpressionMetadata(x, scope).type);
    // this.type = new TupleTypeMetadata(itemsTypes);
  }

  attributes(): AttributeDeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
