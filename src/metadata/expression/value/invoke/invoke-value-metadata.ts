import { Any2 } from '../../../../lib/core';
import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

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
