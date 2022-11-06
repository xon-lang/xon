import { Any2 } from '~/lib';
import { fillValueMetadata, TypeMetadata, ValueMetadata } from '~/metadata';
import { MemberExpressionTree } from '~/tree';

export class MemberValueMetadata extends ValueMetadata {
  constructor(private tree: MemberExpressionTree) {
    super();
    fillValueMetadata(tree.instance);
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
    return null;
  }

  type(): TypeMetadata | null {
    return this.tree.name?.metadata?.type || null;
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
