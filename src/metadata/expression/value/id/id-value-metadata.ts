import { Any, None } from '../../../../lib/core';
import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';

export class IdValueMetadata extends ValueMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();

    tree.name.metadata = this.declaration();
  }

  private declaration() {
    const declarations = this.scope.filter(this.tree.name.text);
    if (declarations.length === 1) {
      return declarations[0];
    }
    if (declarations.length > 0) {
      this.tree.name.addError('Too many declarations');
    } else {
      this.tree.name.addError('No declarations found');
    }
  }

  type(): TypeMetadata | None {
    return this.tree.name.metadata?.type;
  }

  eval(): Any {
    if (this.tree.name.metadata instanceof ParameterMetadata) {
      return this.tree.name.metadata.value?.eval();
    }

    throw new Error('Not implemented');
  }
}
