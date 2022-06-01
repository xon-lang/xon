import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ValueExpressionMetadata } from '../value-expression-metadata';

export class IdValueExpressionMetadata extends ValueExpressionMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }
}
