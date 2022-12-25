import { Boolean2 } from '~/lib/core';
import { AttributeDeclarationMetadata } from '~/metadata/declaration/attribute/attribute-metadata';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { SingleDeclarationTree } from '~/tree/declaration/single/single-declaration-tree';

export class ModelDeclarationMetadata extends DeclarationMetadata {
  constructor(
    tree: SingleDeclarationTree,
    public base: ModelDeclarationMetadata | null,
    public attributes: AttributeDeclarationMetadata[],
  ) {
    super(tree);
  }

  is(other: DeclarationMetadata): Boolean2 {
    if (this.tree.sourceSpan.equals(other.tree.sourceSpan)) {
      return true;
    }

    return this.base?.is(other) ?? false;
  }
}
