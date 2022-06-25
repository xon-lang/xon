import { Any } from '../../../lib/core';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { getParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class MethodValueMetadata extends ValueMetadata {
  constructor(private tree: MethodExpressionTree, private scope: DeclarationScope) {
    super();
    tree.parameters.forEach((x) => (x.metadata = getParameterMetadata(x, scope)[0]));
    const innerScope = scope.create();
    tree.parameters.forEach((x) => innerScope.add(x.metadata));
    tree.value.metadata = getValueMetadata(tree.value, innerScope);
  }

  type(): TypeMetadata {
    if (!(this.tree.value.metadata instanceof ValueMetadata)) {
      throw new Error('Not implemented');
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
