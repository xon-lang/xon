import { ArrayExpressionTree } from '../../../tree/expression/array-expression/array-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ClassDeclarationMetadata } from '../../declaration/class/class-declaration-metadata';
import { ArrayTypeMetadata } from '../../type/array/array-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class ArrayExpressionMetadata extends ExpressionMetadata {
  type: ArrayTypeMetadata;

  constructor(tree: ArrayExpressionTree, scope: DeclarationScope) {
    super();

    // todo make union later
    const firstItemType = getExpressionMetadata(tree.items[0], scope).type;
    const declaration = scope.get(
      this.constructor.name.replace(ExpressionMetadata.constructor.name, ''),
    ) as ClassDeclarationMetadata;
    this.type = new ArrayTypeMetadata(firstItemType, declaration, scope);
  }
}
