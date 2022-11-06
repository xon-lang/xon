import { Any2 } from '~/lib';
import { fillValueMetadata, MethodTypeMetadata, TypeMetadata, ValueMetadata } from '~/metadata';
import { InvokeExpressionTree } from '~/tree';

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
