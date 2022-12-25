import { Boolean2, String2 } from '~/lib/core';
import { Metadata } from '~/metadata/metadata';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { OperatorDeclarationTree } from '~/tree/declaration/operator/operator-declaration-tree';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { SingleDeclarationTree } from '~/tree/declaration/single/single-declaration-tree';

export abstract class DeclarationMetadata extends Metadata {
  public name: String2;

  constructor(public tree: DeclarationTree) {
    super();
    if (
      tree instanceof SingleDeclarationTree ||
      tree instanceof OperatorDeclarationTree ||
      tree instanceof ParameterDeclarationTree
    ) {
      this.name = tree.name.text;

      return;
    }
    throw new Error('Not implemented');
  }

  abstract is(other: DeclarationMetadata): Boolean2;

  equals(other: DeclarationMetadata): Boolean2 {
    return this.tree.sourceSpan?.equals(other.tree.sourceSpan);
  }
}
