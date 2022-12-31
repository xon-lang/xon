import { Any } from '~/lib/core';
import { fillParameterMetadata, getShadowParameterMetadata } from '~/metadata/declaration/declaration-metadata-helper';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-declaration-metadata';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { MethodTypeMetadata } from '~/metadata/type/method/method-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { LambdaExpressionTree } from '~/tree/expression/lambda/lambda-expression-tree';

export class MethodValueMetadata extends ValueMetadata {
  constructor(private tree: LambdaExpressionTree) {
    super();
    tree.parameters.forEach((x) => {
      x.metadata = getShadowParameterMetadata(x);
      if (x.name) {
        x.name.metadata = x.metadata;
      }
      tree.scope.add(x.metadata);
      fillParameterMetadata(x, null);
    });
    getExpressionMetadata(tree.expression);
  }

  type(): TypeMetadata | null {
    if (!(this.tree.expression.metadata instanceof ValueMetadata)) {
      this.tree.expression.addError('Should be a ValueMetadata');

      return null;
    }

    const resultType = this.tree.expression.metadata.type();
    if (!resultType) return null;

    return new MethodTypeMetadata(
      this.tree.parameters.map((x) => x.metadata as ParameterMetadata),
      resultType,
    );
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
