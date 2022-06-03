import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ValueMetadata } from '../value-metadata';

export class LiteralValueMetadata extends ValueMetadata {
  constructor(private tree: LiteralExpressionTree, private scope: DeclarationScope) {
    super();
  }
}
