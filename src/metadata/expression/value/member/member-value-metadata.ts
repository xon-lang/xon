import { Any, None, none } from '../../../../lib/core';
import { MemberExpressionTree } from '../../../../tree/expression/member/member-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { getValueMetadata } from '../value-metadata-helper';

export class MemberValueMetadata extends ValueMetadata {
  constructor(private tree: MemberExpressionTree, private scope: DeclarationScope) {
    super();
    tree.instance.metadata = getValueMetadata(tree.instance, scope);
  }

  type(): TypeMetadata | None {
    const metadata = this.tree.instance.metadata;
    if (metadata instanceof ValueMetadata) {
      const instanceType = metadata.type();
      const attributesScope = instanceType.attributesScope();
      const declarations = attributesScope.filter(this.tree.name.text);
      if (declarations.length === 1) {
        return declarations[0].type;
      }
      if (declarations.length > 0) {
        this.tree.name.addError('Too many declarations');
      } else {
        this.tree.name.addError('No declarations found');
      }
    }
    return none;
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
