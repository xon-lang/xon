import { Any, None, none } from '../../../../lib/core';
import { MemberExpressionTree } from '../../../../tree/expression/member/member-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ValueMetadata } from '../value-metadata';
import { fillValueMetadata } from '../value-metadata-helper';

export class MemberValueMetadata extends ValueMetadata {
  constructor(private tree: MemberExpressionTree, private scope: DeclarationScope) {
    super();
    fillValueMetadata(tree.instance, scope);
    if (tree.name) {
      tree.name.metadata = this.memberDeclaration();
    }
  }

  private memberDeclaration() {
    if (this.tree.instance.metadata instanceof ValueMetadata && this.tree.name) {
      const instanceType = this.tree.instance.metadata.type();
      const attributesScope = instanceType.attributesScope();
      const declarations = attributesScope.filter(this.tree.name.text);
      if (declarations.length === 1) {
        return declarations[0];
      }
      if (declarations.length > 0) {
        this.tree.name.addError('Too many declarations');
      } else {
        this.tree.name.addError('No declarations found');
      }
    }
    return none;
  }

  type(): TypeMetadata | None {
    return this.tree.name?.metadata?.type || none;
  }

  eval(): Any {
    throw new Error('Not implemented');
  }
}
