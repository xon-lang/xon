import { Boolean2, String2 } from '~/lib/core';
import { Metadata } from '~/metadata/metadata';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';

export abstract class DeclarationMetadata extends Metadata {
  public name: String2;

  constructor(public tree: DeclarationTree) {
    super();
    this.name = tree.name.text;
  }

  abstract is(other: DeclarationMetadata): Boolean2;

  equals(other: DeclarationMetadata): Boolean2 {
    return this.tree.sourceSpan?.equals(other.tree.sourceSpan);
  }
}
