import { Any } from '../../../lib/core';
import { InvokeExpressionTree } from '../../../tree/expression/invoke/invoke-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class InvokeValueMetadata extends ValueMetadata {
  constructor(private tree: InvokeExpressionTree, private scope: DeclarationScope) {
    super();
    tree.instance.metadata = getValueMetadata(tree.instance, scope);
    tree.arguments.forEach((x) => (x.value.metadata = getValueMetadata(x.value, scope)));
  }

  type(): TypeMetadata {
    const instanceType = this.tree.instance.metadata.type();
    if (instanceType instanceof MethodTypeMetadata) {
      return instanceType.resultType();
    }
    throw new Error('Not implemented');
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
