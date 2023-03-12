import { Any } from '~/lib/core';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { MethodTypeMetadata } from '~/metadata/type/method/method-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import InvokeNode from '~/tree/expression/invoke/invoke-expression-tree';

export class InvokeValueMetadata extends ValueMetadata {
  constructor(private tree: InvokeNode) {
    super();
    getExpressionMetadata(tree.instance);
    tree.array.forEach((x) => x.value && getExpressionMetadata(x.value));
  }

  type(): TypeMetadata | null {
    const { metadata } = this.tree.instance;
    if (metadata instanceof ValueMetadata) {
      const instanceType = metadata.type();
      if (instanceType instanceof MethodTypeMetadata) {
        return instanceType.resultType;
      }
    }

    return null;
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
