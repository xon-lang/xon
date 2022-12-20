import { Boolean2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';

export class ParameterDeclarationMetadata extends DeclarationMetadata {
  constructor(tree: ParameterDeclarationTree, public type: TypeMetadata) {
    super(tree);
  }

  is(other: DeclarationMetadata): Boolean2 {
    return this.equals(other);
  }
}
