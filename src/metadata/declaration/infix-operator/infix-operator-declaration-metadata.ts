import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { OperatorDeclarationTree } from '~/tree/declaration/operator/operator-declaration-tree';

export class InfixOperatorDeclarationMetadata extends DeclarationMetadata {
left

    constructor(tree: OperatorDeclarationTree) {
    super(tree)
  }

  is(other: DeclarationMetadata): boolean {
    throw new Error('Method not implemented.');
  }
}
