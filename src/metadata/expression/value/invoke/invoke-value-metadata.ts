import { Any2 } from '~/lib/core';
import { MethodTypeMetadata } from '~/metadata/expression/type/method/method-type-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { ValueMetadata } from '~/metadata/expression/value/value-metadata';
import { fillValueMetadata } from '~/metadata/expression/value/value-metadata-helper';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';

export class InvokeValueMetadata extends ValueMetadata {
  constructor(private tree: InvokeExpressionTree) {
    super();
    fillValueMetadata(tree.instance);
    tree.arguments.forEach((x) => fillValueMetadata(x.value));
  }

  type(): TypeMetadata | null {
    const metadata = this.tree.instance.metadata;
    if (metadata instanceof ValueMetadata) {
      const instanceType = metadata.type();
      if (instanceType instanceof MethodTypeMetadata) {
        return instanceType.resultType;
      }
    }
    return null;
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
