import { Any, None, none } from '../../../../lib/core';
import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { DeclarationMetadata } from '../../../declaration/declaration-metadata';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';

export class IdValueMetadata extends ValueMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }

  declaration(): DeclarationMetadata | None {
    const declarations = this.scope.filter(this.tree.name.text);
    if (declarations.length === 1) {
      return declarations[0];
    }
    if (declarations.length > 0) {
      this.tree.name.addError('Too many declarations');
    } else {
      this.tree.name.addError('No declarations found');
    }
    return none;
  }

  type(): TypeMetadata | None {
    return this.declaration()?.type;
  }

  eval(): Any {
    const declaration = this.declaration();
    if (declaration instanceof ParameterMetadata) {
      return declaration.value?.eval();
    }

    throw new Error('Not implemented');
  }
}
