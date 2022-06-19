import { Any } from '../../../lib/core';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class MemberValueMetadata extends ValueMetadata {
  constructor(private tree: MemberExpressionTree, private scope: DeclarationScope) {
    super();
    tree.instance.metadata = () => getValueMetadata(tree.instance, scope);
  }

  type(): TypeMetadata {
    const metadata = this.tree.instance.metadata();
    if (metadata instanceof ValueMetadata) {
      const instanceType = metadata.type();
      const attributesScope = instanceType.attributesScope();
      const declaration = attributesScope.find(this.tree.name.text);
      return declaration.type();
    }
    throw new Error('Not implemented');
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
