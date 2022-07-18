import { Any, none, None } from '../../../../lib/core';
import { InvokeExpressionTree } from '../../../../tree/expression/invoke/invoke-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class InvokeValueMetadata extends ValueMetadata {
  constructor(private tree: InvokeExpressionTree, private scope: DeclarationScope) {
    super();
    fillValueMetadata(tree.instance, scope);
    tree.arguments.forEach((x) => fillValueMetadata(x.value, scope));
  }

  type(): TypeMetadata | None {
    const metadata = this.tree.instance.metadata;
    if (metadata instanceof ValueMetadata) {
      const instanceType = metadata.type();
      if (instanceType instanceof MethodTypeMetadata) {
        return instanceType.resultType;
      }
    }
    return none;
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
