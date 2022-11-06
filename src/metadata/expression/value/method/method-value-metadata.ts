import { Any2 } from '~/lib';
import {
  fillParameterMetadata,
  fillValueMetadata,
  getShadowParameterMetadata,
  MethodTypeMetadata,
  ParameterMetadata,
  TypeMetadata,
  ValueMetadata,
} from '~/metadata';
import { MethodExpressionTree } from '~/tree';

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
