import { Boolean2, String2 } from '~/lib/core';
import { GenericMetadata } from '~/metadata/declaration/generic/generic-metadata';
import { ParameterMetadata } from '~/metadata/declaration/parameter/parameter-metadata';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';
import { Metadata } from '~/metadata/metadata';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { SourceRange } from '~/util/source-range';

export abstract class DeclarationMetadata extends Metadata {
  sourceRange?: SourceRange;
  modifier?: String2 | null;
  name?: String2 | null;

  generics: GenericMetadata[] = [];
  parameters: ParameterMetadata[] = [];
  type: TypeMetadata | null = null;

  constructor(public tree: DeclarationTree | null) {
    super();

    if (tree) {
      this.sourceRange = tree.sourceRange;
      this.modifier = tree.modifier?.text;
      this.name = tree.name?.text;
    }
  }

  equals(other: DeclarationMetadata): Boolean2 {
    return (other.sourceRange && this.sourceRange?.equals(other.sourceRange)) ?? false;
  }
}
