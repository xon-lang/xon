import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ValueMetadata } from '../value-metadata';

export class IdValueMetadata extends ValueMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }
}
