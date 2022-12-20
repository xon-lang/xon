import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  constructor(tree: ParameterDeclarationTree) {
    super(tree);
  }

  is(other: DeclarationMetadata): boolean {
    throw new Error('Method not implemented.');
  }
}
