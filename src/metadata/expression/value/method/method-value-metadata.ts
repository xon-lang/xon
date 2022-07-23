import { Any, none, None } from '../../../../lib/core';
import { MethodExpressionTree } from '../../../../tree/expression/method/method-expression-tree';
import {
  fillParameterMetadata,
  getShadowParameterMetadata,
} from '../../../declaration/declaration-metadata-helper';
import { ParameterMetadata } from '../../../declaration/parameter/parameter-metadata';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class MethodValueMetadata extends ValueMetadata {
  constructor(private tree: MethodExpressionTree) {
    super();
    tree.parameters.forEach((x) => {
      x.metadata = getShadowParameterMetadata(x);
      if (x.name) {
        x.name.metadata = x.metadata;
      }
      tree.scope.add(x.metadata);
      fillParameterMetadata(x);
    });
    fillValueMetadata(tree.value);
  }

  type(): TypeMetadata | None {
    if (!(this.tree.value.metadata instanceof ValueMetadata)) {
      this.tree.value.addError('Should be a ValueMetadata');
      return none;
    }

    return new MethodTypeMetadata(
      this.tree.parameters.map((x) => x.metadata as ParameterMetadata),
      this.tree.value.metadata.type(),
    );
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
