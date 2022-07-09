import { Any, none, None } from '../../../../lib/core';
import { MethodExpressionTree } from '../../../../tree/expression/method/method-expression-tree';
import {
  fillParameterMetadata,
  getShadowParameterMetadata,
} from '../../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class MethodValueMetadata extends ValueMetadata {
  constructor(private tree: MethodExpressionTree, private scope: DeclarationScope) {
    super();
    const innerScope = scope.create();
    tree.parameters.forEach((x) => {
      x.metadata = getShadowParameterMetadata(x, innerScope);
      if (x.name) {
        x.name.metadata = x.metadata;
      }
      innerScope.add(x.metadata);
      fillParameterMetadata(x);
    });
    tree.value.metadata = getValueMetadata(tree.value, innerScope);
  }

  type(): TypeMetadata | None {
    if (!(this.tree.value.metadata instanceof ValueMetadata)) {
      this.tree.value.addError('Should be a ValueMetadata');
      return none;
    }

    return new MethodTypeMetadata(
      this.tree.parameters.map((x) => x.metadata),
      this.tree.value.metadata.type(),
    );
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
