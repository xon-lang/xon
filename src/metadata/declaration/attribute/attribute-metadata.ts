import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  constructor(tree: DeclarationTree) {
    super(tree);
  }

  is(other: DeclarationMetadata): boolean {
    throw new Error('Method not implemented.');
  }
}
