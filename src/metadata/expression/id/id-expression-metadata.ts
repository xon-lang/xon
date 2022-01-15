import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata implements ExpressionMetadata {
  constructor(private node: IdExpressionTree, private scope: DeclarationScope) {}

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.node.id.name.text);
  }

  attributes(): DeclarationMetadata[] {
    return this.declaration().attributes();
  }
}
