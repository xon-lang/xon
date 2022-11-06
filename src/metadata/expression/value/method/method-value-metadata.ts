import { Any2 } from '~/lib/core';
import {
  fillParameterMetadata,
  getShadowParameterMetadata,
} from '~/metadata/declaration/declaration-metadata-helper';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { MethodTypeMetadata } from '~/metadata/expression/type/method/method-type-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { fillValueMetadata } from '~/metadata/expression/value/value-metadata-helper';
import { MethodExpressionTree } from '~/tree/expression/method/method-expression-tree';

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

  type(): TypeMetadata | null {
    if (!(this.tree.value.metadata instanceof ValueMetadata)) {
      this.tree.value.addError('Should be a ValueMetadata');
      return null;
    }

    return new MethodTypeMetadata(
      this.tree.parameters.map((x) => x.metadata as ParameterMetadata),
      this.tree.value.metadata.type(),
    );
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
